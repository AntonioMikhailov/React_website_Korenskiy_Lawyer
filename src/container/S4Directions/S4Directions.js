import React from 'react'
 
import S4Item from './data'
import Title from '../../components/Title/Title'

export default function S4Directions() {
   
  return (
    <section className="s4">
    <div className="container">
      <Title
      title={'Наши направления'}
      id={'s4'}
      />
       <div className="s4-text body"> Адвокатская контора «Коренский и партнеры» готова предоставить Вам весь спектр
        услуг по всем областям юриспруденции. Мы эффективно защищаем доверителей по уголовным делам,а также успешно
        разрешаем гражданские споры различной степени сложности более 20 лет. Мы предложим самый оптимальный способ
        решения любой юридической проблемы.</div>
      <div className="s4-row">
        {  S4Item.map((item)=> {
          return (
           <div className="s4-item"  key={item.id}>
            <div className="s4-item__icon"><img src={item.icon} alt="#"/></div>
            <h3 className="s4-item__title">{item.title}</h3>
            <div className="s4-item__text body">{item.text}</div>
            <div className="s4-item__line"></div>
          </div>
          )
        })
        }
       
      </div>
    </div>
  
  </section>
  )
}
