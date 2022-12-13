import React from 'react'
import img from '../../data/images'
import icon from '../../data/icons'
import Title from '../../components/Title/Title'
 
export default function S8Parallax() {
  const icons = [icon.sec_8_1, icon.sec_8_2, icon.sec_8_3, icon.sec_8_4, icon.sec_8_5, icon.sec_8_6,]
  return (
    <section className="s8">
      <Title
      title={'Наши партнеры'}
      id={'s8'}
      />
    
    <div className="s8-text body">Среди наших клиентов крупные строительные компании, холдинги, консалтинговые фирмы и
      фонды. Также мы работаем с физическими лицами по всем направлениям юриспруденции.</div>
    <div className="s8-parallax__row"
     style={{ backgroundImage: "url("+ img.sec8_2 +")" }}
     >
      <div className="s8-logo__row">
{ icons.map((item, index) => {
  return (
    <div className="s8-logo__item" key={index}><img src={item} alt="#"/></div>
  )
})
}
 
      </div>
    </div>
  </section>
  )
}
