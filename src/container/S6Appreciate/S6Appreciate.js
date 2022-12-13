 import React from 'react'
import { useEffect } from 'react'
 import img from '../../data/images.js'
 export default function S6Appreciate() {
useEffect(()=> {
//  отодвигаем контент вправо - marginLeft
    const s6_container = document.querySelector('.container');
    const containerMargin = getComputedStyle(s6_container);
    const sixLeftRow = document.querySelector('.s6-left__row');
    function leftRowMargin() {
      sixLeftRow.style.marginLeft = containerMargin.marginLeft;
    }
    leftRowMargin();
    window.addEventListener('resize', () => {
      leftRowMargin();
    });
})
   return (
    <section className="s6">
        <div className="s6-row">
          <div className="s6-left">
            <div className="s6-left__row">
              <div className="s6-left__title">Мы ценим <br/> командную работу</div>
              <div className="s6-left__line line"></div>
              <div className="s6-left__text">Принцип работы внутри нашей компании заключается во взаимопомощи и поддержки
                друг друга. Когда мы выигрываем,мы понимаем,что это заслуга всего нашего коллектива.</div>
            </div>
          </div>
          <div className="s6-right"><img src={img.sec_6} alt="#"/></div>
        </div>
      </section>
   )
 }
