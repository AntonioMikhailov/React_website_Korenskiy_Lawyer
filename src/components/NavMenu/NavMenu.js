import React from 'react'
export default function NavMenu() {
  return (
    <nav className="s0-nav__row">
    <a href="#s2" data-link data-nav className="s0-abous3-nav  s0-nav__item active-navMenu">О нас</a>
    <a href="#s4" data-link data-nav className="s0-nav__item s0-service-nav">Услуги</a>
    <a href="#s7" data-link data-nav className="s0-nav__item s0-team-nav">Команда</a>
    <a href="#s8" data-link data-nav className="s0-nav__item s0-partners-nav">Партнеры</a>
    <a href="#s10" data-link data-nav className="s0-nav__item s0-price-nav">Цены</a>
    <div className="s0-nav__item s0-allSection s0-allSection-nav">Все разделы
      <div className="s0-nav-dropDownMenu">
        <a href="#s2" data-link className="s0-dropDown__item s0-abous3-nav dropDownMenu-active">О нас</a>
        <a href="#s4" data-link className="s0-dropDown__item s0-service-nav">Услуги</a>
        <a href="#s7" data-link className="s0-dropDown__item s0-team-nav">Команда</a>
        <a href="#s8" data-link className="s0-dropDown__item s0-partners-nav">Партнеры</a>
        <a href="#s9" data-link className="s0-dropDown__item s0-examlpe-nav">Наши дела</a>
 <a href="#s10" data-link className="s0-dropDown__item s0-price-nav">Цены</a> 
 <a href="#s11" data-link className="s0-dropDown__item s0-requess3-nav">Отзывы</a>
  <a href="#s13" data-link className="s0-dropDown__item s0-contacts-nav">Контакты</a> 
  </div> 
  </div> 
  </nav>
  )
}
