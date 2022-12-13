import React, { useEffect } from 'react'
import Title from '../../components/Title/Title'
import img from '../../data/images'
import s9AccordItem from './data'
export default function S9Accordion() {
  useEffect(()=> {
  // SEC - 9 Аккордеон
// Вариант когда открываем все по желанию
const s9TitleRow = document.querySelectorAll('.s9-item__titleRow');
 //Сначала открываем первый аккорд.
 s9TitleRow[0].nextElementSibling.style.maxHeight = s9TitleRow[0].nextElementSibling.scrollHeight + 'px' ;
 s9TitleRow[0].classList.add('s9-showText');
 s9TitleRow[0].firstElementChild.firstElementChild.classList.add('s9-item_activeIcon');
s9TitleRow.forEach(item => {
 item.addEventListener('click', function() { 
   this.classList.toggle('s9-showText');
   //иконку поворачиваем
   this.firstElementChild.firstElementChild.classList.toggle('s9-item_activeIcon');
  //далее класс s9-showText' добавляем уже контенту - следующему после кнопки триггера
   if(this.classList.contains('s9-showText')) {
   this.nextElementSibling.style.maxHeight =  this.nextElementSibling.scrollHeight + 'px'; //
   } else {
    this.nextElementSibling.style.maxHeight =  '0px';
   }
  });
});
  })
 
return (
    <section className="s9">
    <div className="container">
      <Title
      title={'Примеры наших дел '}
      id={'s9'}
      />
      <div className="s9-text body">В спиcке ниже, Вы можете ознакомиться с несколькими последними делами нашей конторы.
        В&nbsp;описании будет кратко перечисленна проблема, которая стояла перед клиентом и путь ее решения. Мы
        оказываем
        услуги, как юридическим лицам, так и гражданам по личным вопросам.</div>
      <div className="s9-row">
        <div className="s9-left">
          { s9AccordItem.map((item,index)=> {
            return (
              <div className="s9-accord__item" key={index}>
            <div  className="s9-item__titleRow">
              <a href={`#accordion${index+1}`} data-link data-notitlechange >
                <h3 className="s9-item__title" id={`accordion${index+1}`}  >{item.title}</h3>
              </a>
              <div className="s9-item__text body">{item.subTitle}</div>
            </div>
            <div className="s9-item__textRow">
              <div className="s9-textRow__text body">{item.text}</div>
            </div>
          </div>
            )
          })
          }
        </div>
        <div className="s9-right"><img src={img.sec9} alt="#"/></div>
      </div>
    </div>
  </section>
  )
}
