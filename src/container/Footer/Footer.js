import React from "react";
import img from "../../data/images";
export default function Footer() {
  const serveNav = [
    { serv: "Уголовное право" },
    { serv: "Гражданское право" },
    { serv: "Семейные споры" },
    { serv: "Раздел имущества" },
    { serv: "Бизнес и налоги" },
    { serv: "Представительство в суде" },
  ];
  const nameNav = [
    { names: "Виктор Гонюшин" },
    { names: "Анна Верещагина" },
    { names: "Елена Рудовская" },
    { names: "Олег Сакуров" },
    { names: "Рудольф Щенников" },
    { names: "Анна Ким" },
  ];

  const contactsNav = {
    adress: "г.Москва,ул.Грузинский Вал,9 ",
    phone: "(495) 123 45 67 ",
    email: "korenskiy@korenskiy.ru ",
    worktime: "Часы работы:пн-пт.,9-19ч. ",
  };
 
  return (
    <>
      <footer className="s14">
        <div className="container">
          <div className="s14-row">
            <div className="s14-left">
              <div className="s14-logo">
                <img src={img.logoInv} alt="#" />
              </div>
              <div className="s14-left__text">
                Адвокатская контора «Коренский и партнеры» более 20 лет успешно
                работает на рынке юридических услуг Москвы и Московской области.
                Ждем Ваших звонков. Всего хорошего!
              </div>
            </div>
            <div className="s14-right">
              <div className="s14-right__row">
                <div className="s14-right__column">
                  <div className="s14-right__title">Виды услуг</div>
                  {serveNav.map((item, index) => {
                    return (
                      <ul key={index}>
                        <a href="#s4" data-link data-footer data-notitlechange>
                          <li className="s14-right__list hi-service-nav">
                            {item.serv}
                          </li>
                        </a>
                      </ul>
                    );
                  })}
                </div>
                <div className="s14-right__column">
                  <div className="s14-right__title">Наши юристы</div>
                  {nameNav.map((item, index) => {
                    return (
                      <ul key={index}>
                        <a href="#s7" data-link data-footer data-notitlechange>
                          <li className="s14-right__list hi-service-nav">
                            {item.names}
                          </li>
                        </a>
                      </ul>
                    );
                  })}
                </div>
                <div className="s14-right__adressColumn">
                  <div className="s14-right__title">Наши контакты</div>
                  <a
                    href="https://yandex.ru/maps/?um=constructor%3A0a5ac5404dc228093a63865454d2cd6533c887d384667e387c3681e6f5814b80&source=constructorLink"
                    className="s14-adressColumn__item s14-adress">
    {contactsNav.adress}
  </a> 
  <a href="tel:#" className="s14-adressColumn__item s14-phone">{contactsNav.phone}</a> 
  <a href="email:#" className="s14-adressColumn__item s14-email"> {contactsNav.email}</a>
                  <div className="s14-adressColumn__item s14-workTime">
                    {contactsNav.email}
                  </div>
                  <div className="s14-social__row">
                    <div className="s14-social__item">&#xe911;</div>
                    <div className="s14-social__item">&#xe908;</div>
                    <div className="s14-social__item">&#xe906;</div>
                    <div className="s14-social__item">&#xe90a;</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-design">
            Дизайн и верстка:студия дизайна «Точка Фокуса» 2021г.
          </div>
        </div>
      </footer>
      <section className="arrow-anchor">
        <a href="#toUp" data-link data-notitlechange className="anchor-wrapper">
          <div className="anchor-button"></div>
        </a>
      </section>
    </>
  );
}
