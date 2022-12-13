import React from 'react'


export default function MobileMenu({activeMobile, setActiveMobile}) {
 
return (
    <div onClick={()=> setActiveMobile(false)} className={activeMobile ? "mobile-menu showMobileMenu" : 'mobile-menu' }>
      {/* Блокируем закрытие по клику на всем кроме фона мобилки - но это не обязательно т.к. закрытие по ссылкам также нужно */}
    <nav  className="mobile-menu__row">
 
      <a href="#s2" data-link data-mobile className="mobile-menu__item s0-abous3-nav mobb ">О нас</a>
      <a href="#s4" data-link data-mobile='mobile' className="mobile-menu__item s0-service-nav">Услуги</a>
      <a href="#s7" data-link data-mobile className="mobile-menu__item s0-team-nav">Команда</a>
      <a href="#s8" data-link data-mobile className="mobile-menu__item s0-partners-nav">Партнеры</a>
      <a href="#s9" data-link data-mobile className="mobile-menu__item s0-examlpe-nav">Наши дела</a>
      <a href="#s10" data-link data-mobile className="mobile-menu__item s0-price-nav">Цены</a>
      <a href="#s11" data-link data-mobile className="mobile-menu__item s0-requess3-nav">Отзывы</a>
      <a href="#s13" data-link data-mobile className="mobile-menu__item s0-contacts-nav">
        Контакты</a>
    </nav>
  </div>
  )
}
