import React, { useEffect } from 'react'
import { useState, useRef } from 'react';
import Title from '../../components/Title/Title';
import img from '../../data/images'
export default function S5Timeline() {
  const s5RightSelector = useRef()
  const [active, setActive] = useState(false)

useEffect(()=> {
const s5Right  = s5RightSelector.current;
window.addEventListener('scroll', () => {
  let timelineTopOffset = s5Right.getBoundingClientRect().top;
  if(timelineTopOffset < window.innerHeight -100) {
  setActive(true)  
  }
});
})
const S5Item = [
  { year: 2005, num: 310, id: 1 },
  { year: 2008, num: 530, id: 2 },
  { year: 2010, num: 852, id: 3 },
  { year: 2015, num: 1210, id: 4 },
  { year: 2019, num: 1500, id: 5 },
]
return (
    <section className="s5">
    <div className="container">
      <Title title={'Рост количества наших клиентов 2000-2020'}
      id={'s5'}  
      />
      <div className="s5-row">
        <div className="s5-left"><img src={img.sec_5} alt="#"/></div>
        <div ref={s5RightSelector} className="s5-right">
        { S5Item.map((item, index)=> {
return (
   <div className="s5-right__item" key={index + `${item.year}`} >  
   <div className="s5-data__row" >
      <div className="s5-data__year">{item.year}<span>г.</span></div>
      <div className="s5-data__number">{item.num}</div>
    </div>
 
    <div className={active ? `s5-item__timeline  timeline${item.id} timeline-active` : 's5-item__timeline'} ></div>
  </div>
)
})
}
 
        </div>
      </div>
    </div>
  </section>
  )
}
