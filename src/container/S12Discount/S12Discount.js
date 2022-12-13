import React from 'react'
import img from  '../../data/images'

export default function S12Discount() {
  return (
    <section className="s12">
    <div className="s12-row">
      <div className="s12-left"><img src={img.sec_12} alt="#"/></div>
      <div className="s12-right">
        <div className="s12-right__row">
          <div className="s12-title">При повторном заказе услуги – скидка 25%</div>
          <div className="s12-line line"></div>
          <div className="s12-text">Воспользуйтесь услугами адвокатской конторы «Коренский и партнеры» и получите скидку
            на такую же услугу при обращении в контору в течение года</div>
        </div>

      </div>
    </div>

  </section>
  )
}
