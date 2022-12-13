import React, {  useRef } from 'react'
 
import icon from '../../data/icons'
import s11Item from './data'
import './S11SlickSlider.scss'
import Slider from "react-slick";
import Title from '../../components/Title/Title';
export default function S11CommentsSlick() {
  const s11Row = useRef()
 
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    autoplaySpeed: 10000,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: false,
    autoplay: false,
    pauseOnHover: true,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
   
  ]
  };
    
  return (
    <section className="s11" >
    <div className="container">
      <Title title={'Отзывы наших клиентов'} id="s11" data-link/>
     
      <div className="s11-wrapper">
    <div ref={s11Row} className="s11-row">
      <Slider {...settings} >
          {s11Item.map((item)=> {
            return (
              <div  key={item.id}> 
                {}
                 <div className="s11-item">
              <div className="s11-item__icon"><img src={icon.sec_11_Quote} alt="#"/></div>
              <div className="s11-item__text body">{item.text}</div>
              <div className="s11-item__name">{item.name}</div>
            </div>
              </div>
           )
          })
          }
       </Slider>
      </div>
     
      </div>
      {
}
      </div>
  </section>
  )
}
 