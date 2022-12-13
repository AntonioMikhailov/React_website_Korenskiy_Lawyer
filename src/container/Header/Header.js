import React from 'react'
import { useState } from 'react';

import img from '../../data/images'
import MobileMenu from '../../components/MobileMenu/MobileMenu';
import NavMenu from '../../components/NavMenu/NavMenu';
export default function Header() {

const [activeMobile, setActiveMobile] = useState(false)
 

  function toggleMobMenu() { 
    setActiveMobile(prev => !prev)
    console.log(activeMobile);
  }
  return (
    <section className="header-wrapper">

    <section className="s0">
      <div className="container">
        <div className="s0-row" id='toUp'>

          <div onClick={()=> toggleMobMenu()} className={ activeMobile ? "s0-burger__button active-burger" : 's0-burger__button' }> <span></span></div>

          <div className="s0-adress"> <a href="tel:12345678" className="s0-adress__phone">(495) 123 45 67</a> 
          <a href="email:#" className="s0-adress__email">korenskiy@korenskiy.ru</a> </div>
          <div className="s0-social">
            <a href="./" className="s0-social__item">&#xe911;</a>
            <a href="./" className="s0-social__item">&#xe908;</a> 
            <a href="./" className="s0-social__item">&#xe906;</a>
            <a href="./" className="s0-social__item">&#xe90a;</a>
            </div>
           
           
        </div>
      </div>
          <MobileMenu 
          activeMobile={activeMobile}
          setActiveMobile={setActiveMobile}
          />
    </section>

    <div className="s0-logo"><img src={img.logo} alt="#" /></div>
  <section className="s0-nav">
      <div className="container">
      <NavMenu/>
      </div>
    </section>
  </section>
  )
}
