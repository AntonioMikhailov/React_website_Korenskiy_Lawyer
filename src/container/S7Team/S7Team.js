import React from 'react'
import Title from '../../components/Title/Title'
import img from '../../data/images'

export default function S7Team() {
const s7Column = [
{ img: img.sec7_1, phone: '(495) 123 456 72', email: 'korenskiy1@korenskiy.ru' , name:'Виктор Гонюшин', text: 'уголовное право' },
{ img: img.sec7_2, phone: '(495) 123 456 73', email: 'korenskiy2@korenskiy.ru' , name:'Анна Верещагина', text: 'семейные споры' },
{ img: img.sec7_3, phone: '(495) 123 456 74', email: 'korenskiy3@korenskiy.ru' , name:'Рудольф Щенников', text: 'юридические лица' },
{ img: img.sec7_4, phone: '(495) 123 456 75', email: 'korenskiy4@korenskiy.ru' , name:'Елена Рудовская', text: 'административное право' },
{ img: img.sec7_5, phone: '(495) 123 456 76', email: 'korenskiy4@korenskiy.ru' , name:'Олег Сакуров', text: 'сделки с недвижимостью' },
{ img: img.sec7_6, phone: '(495) 123 456 77', email: 'korenskiy6@korenskiy.ru' , name:'Анна Ким', text: 'физические лица' }

]

  return (
    <section className="s7">
    <div className="container">
      <Title
      title={'Наша команда'}
      id={'s7'}
      />
     <div className="s7-text body">Наша репутация опережает нас не просто так:более чем 20-летняя история работы в
        Москве принесла нам только положительные отзывы наших клиентов. Присоединяйтесь к нам! </div>
      <div className="s7-row">
   {s7Column.map((item,index)=> {
    return(
      <div className="s7-column" key={index +item.phone}>
     
      <div className="s7-item">
        <div className="s7-image__row">
          <div className="s7-image"><img src={item.img} alt="#"/></div>
          <div className="s7-image__data"> <a href="tel:#" className="s7-data__phone">{item.phone}</a> <a
              href="email:#" className="s7-data__email"> {item.email}</a> </div>
        </div>
        <div className="s7-name">{item.name}</div>
        <div className="s7-item__text body">{item.text}</div>
        <div className="s7-social__row"> <a href="./" className="s7-social__item">&#xe911;</a> <a href="./"
            className="s7-social__item">&#xe908;</a> <a href="./" className="s7-social__item">&#xe906;</a> <a href="./"
            className="s7-social__item">&#xe90a;</a> </div>
      </div>
    </div>
    )
   })}
       
      
      </div>
    </div>
  </section>
  )
}
