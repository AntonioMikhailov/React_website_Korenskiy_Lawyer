import React from 'react'
import PricesContent from './PricesContent'


export default function S10Prices() {

  const s10Column = [
{
  title: 'Уголовные дела', 
  subTitle1: 'Устная консультация ', text1: 'от 2100 руб. ',
  subTitle2: 'Письменная консультация', text2: 'от 5000 руб. ',
  subTitle3: 'Адвокатские запросы', text3: 'от 3000 руб. ',
  subTitle4: 'Ходатайства, заявления, жалобы', text4: ' от 4000 руб.',
  subTitle5: 'Апелляционные жалобы', text5: 'от 13000 руб. ',
  id: 1,
},
{
  title: 'Гражданские дела', 
  subTitle1: 'Устная консультация ', text1: 'от 2200 руб. ',
  subTitle2: 'Письменная консультация', text2: 'от 5000 руб. ',
  subTitle3: 'Адвокатские запросы', text3: 'от 3000 руб. ',
  subTitle4: 'Ходатайства, заявления, жалобы', text4: ' от 4000 руб.',
  subTitle5: 'Апелляционные жалобы', text5: 'от 13000 руб. ',
  id: 2,
},
 
{
  title: 'Наследование, дарение', 
  subTitle1: 'Устная консультация ', text1: 'от 2250 руб. ',
  subTitle2: 'Письменная консультация', text2: 'от 5000 руб. ',
  subTitle3: 'Адвокатские запросы', text3: 'от 3000 руб. ',
  subTitle4: 'Ходатайства, заявления, жалобы', text4: ' от 4000 руб.',
  subTitle5: 'Апелляционные жалобы', text5: 'от 13000 руб. ',
  id: 3,
},
 
 
 

  ]
  return (
    <section className="s10">
    <div className="container">
      <h2 className="s10-title" id="s10" data-link>Цены на услуги</h2>
      <div className="s10-line line"></div>
      <div className="s10-text body">Вы можете ознакомиться с оcновными разделами нашей деятельности и стоимости услуг
        по главным направлениям. Чтобы узнать расчет окончательной стоимости услуги, свяжитесь с нами любым удобным
        способом.</div>
      <div className="s10-row">

       { s10Column.map(item => {
        return (
        <PricesContent
        key={item.id}
        title={item.title}
        sub1={item.subTitle1}
        text1={item.text1}
        sub2={item.subTitle2 }
        text2={item.text2 }
        sub3={item.subTitle3}
        text3={item.text3}
        sub4={item.subTitle4}
        text4={item.text4}
        sub5={item.subTitle5}
        text5={item.text5}
        
        />
        )
       })


       }
        

     
 

      </div>
    </div>
  </section>
  )
}
