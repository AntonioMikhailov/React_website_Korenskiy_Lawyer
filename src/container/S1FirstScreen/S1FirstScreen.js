 import React from 'react'
 
 
 import img from '../../data/images' 
import { useEffect } from 'react'
import { useRef } from 'react'
 

 export default function S1FirstScreen() {

  const oneSec = useRef(null)
 

  const S1SlideBlock = [
    {
     imgTablet: img.sec_1_Tablet,
     imgOrigin: img.sec_1,
     smallHeader: 'Доступная юридическая помощь',
     title: 'Доступная юридическая помощь',
     text: 'Адвокаты Московской коллегии адвокатов «Коренский и партнеры» добиваются главного:делают жизнь своих клиентов комфортнее и безопаснее и экономят их время и деньги. ',
  },
  {
    imgTablet: img.sec_2_Tablet,
    imgOrigin: img.sec_2,
    smallHeader: 'Наши услуги',
    title: 'Весь спектр услуг',
    text: 'Мы эффективно защищаем доверителей по уголовным делам,а также успешно разрешаем гражданские споры различной степени сложности более 20 лет. Мы предложим самый оптимальный способ решения любой юридической проблемы.',
 },
 {
  imgTablet: img.sec_3_Tablet,
  imgOrigin: img.sec_3,
  smallHeader: 'Будьте с нами',
  title: 'Мы готовы ответить на ваши вопросы',
  text: <>Позвоните по номеру <a href="tel:#">+7 (495) 123 45 67</a> и получите
  бесплатную консультацию по всем вопросам связанным с уголовным и административным правом,как для
  физических так и для юридических лиц 
  </>,
},

  ]
 
  useEffect(()=> {
 // меняем на Ref
  const oneSection = document.querySelector('.s1 ');
 
  const oneSlideBlock = document.querySelectorAll('.s1-slideBlock ');
  const oneIndicatorItem = document.querySelectorAll('.s1-indicator__item');
  const onetextRow = document.querySelectorAll('.s1-textRow ');
  //первый показ
  function ShowTextDelay() {
    oneSlideBlock[0].classList.add('s1-slideBlock__active');
    setTimeout(() => {
      onetextRow.forEach(item => {
        item.classList.remove('oneTextRow__show');
        onetextRow[SlideIndex - 1].classList.add('oneTextRow__show');
      });
    }, 500);
  }
  ShowTextDelay();
  let SlideIndex = 1;
  function showSlides(n) {
    if (n > oneSlideBlock.length) {
      SlideIndex = 1;
    }
    if (n < 1) {
      SlideIndex = oneSlideBlock.length;
    }
    oneSlideBlock.forEach(item => {
      item.classList.remove('s1-slideBlock__active');
      oneSlideBlock[SlideIndex - 1].classList.add('s1-slideBlock__active');
      setTimeout(() => {
        onetextRow.forEach(item => {
          item.classList.remove('oneTextRow__show');
          onetextRow[SlideIndex - 1].classList.add('oneTextRow__show');
        });
      }, 500);
    });
    oneIndicatorItem.forEach(item => {
      item.classList.remove('s1-indicator__active');
      oneIndicatorItem[SlideIndex - 1].classList.add('s1-indicator__active');
    });
  }
  let stopAutoSlaider;
  function autoSlidesShow() {
    stopAutoSlaider = setInterval(() => {
      showSlides(SlideIndex += 1);
    }, 7000);

  
  }
   autoSlidesShow(); // 
  oneIndicatorItem.forEach((item, i) => {
    item.addEventListener('click', () => {
      clearInterval(stopAutoSlaider);
      oneSlideBlock.forEach(item => {
        item.classList.remove('s1-slideBlock__active');
        oneSlideBlock[i].classList.add('s1-slideBlock__active');
        oneIndicatorItem.forEach(item => {
          item.classList.remove('s1-indicator__active');
          oneIndicatorItem[i].classList.add('s1-indicator__active');
        });
      });
      setTimeout(() => {
        onetextRow.forEach(item => {
          item.classList.remove('oneTextRow__show');
          onetextRow[i].classList.add('oneTextRow__show');
        });
      }, 500);
    });
  });
  //stop-play auto on Hover
 oneSection.addEventListener('mouseenter', () => {
    clearInterval(stopAutoSlaider);
  });
  //stop-play auto on Hover
  oneSection.addEventListener('mouseleave', () => {
    autoSlidesShow();
  });
 
})//

   return (
  <section ref={oneSec}  className="s1">
    <div className="s1-wrapper">
      {S1SlideBlock.map((item, index)=> {
          return (
       
            <React.Fragment key={index}>
               <div className="s1-slideBlock" >
        <div className="s1-backgroundImage">
          <picture>
            <source   srcSet={item.imgTablet} type="image/jpg" media="(max-width:768px)"/> <img
              src={item.imgOrigin} alt="#"/> </picture>
        </div>
        <div className="s1-textRow">
          <div className="s1-smallHeader">{item.smallHeader}</div>
          <h1 className="s1-header">{item.title}</h1>
          <div className="s1-text body">{item.text}</div> <a
            href="tel:#" className="s1-button">бесплатная консультация</a>
        </div>
      </div>
              </React.Fragment> 
       
           
          )

        })

        }
           
    </div>
    <div className="s1-indicator__Row">
      <div className="s1-indicator__item s1-indicator__active "></div>
      <div className="s1-indicator__item"></div>
      <div className="s1-indicator__item"></div>
    </div>
  </section>

   )
 }



