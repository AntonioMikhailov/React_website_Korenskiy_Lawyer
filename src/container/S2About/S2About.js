import React from 'react'
import Title from '../../components/Title/Title'
import img from '../../data/images' 
 
import './S2About.scss'  

export default function S2About() {


  return (
   <section className="s2">
        <div className="container">
          <Title 
          title={'О нас'}
          id={'s2'}
          />
         
          <div className="s2-text body"> Адвокатская контора «Коренский и партнеры» более 20 лет успешно работает на рынке
            юридических услуг Москвы и Московской области. На сегодняшний день мы представляем интересы наших клиентов в
            Москве, Санкт-Петербурге, Тюмени, Волгограде и Екатеринбурге.</div>
          <div className="s2-row">
            <div className="s2-left">
              <div className="s2-left__text body">Мы понимаем,как непросто приходится людям,пытающимся разобраться в
                «юридических дебрях» без профессиональной помощи. Сухой язык законов крайне сложен для восприятия,а
                изучение действующих норм сопряжено с множеством трудностей для каждого,кто не является специалистом в
                вопросах юриспруденции. <p> Наше адвокатское бюро ценит время своих клиентов и минимизирует их
                  вовлечение в рабочий процесс. Оставайтесь свободными от юридической рутины,бюрократических проволочек
                  и хитросплетений законодательных норм,поручив решение своей задачи квалифицированным специалистам,для
                  которых правовая помощь и поддержка является профессией и призванием. </p>
                <p> Продолжайте спокойно жить и заниматься любимыми делами,поручив решение юридических проблем
                  специалистам нашего адвокатского бюро!</p>
              </div>
              <div className="s2-signature">
                <div className="s2-signature-name"> А.К. Коренский </div>
                <div className="s2-signature-image"><img src={img.sec_2_Signature} alt="#"/></div>
              </div>
            </div>
            <div className="s2-right">
              <picture>
                <source srcSet={img.sec_2_Mobile} type="image/jpg" media="(max-width:400px)"/> <img
                  src={img.sec_2_Desktop} alt="#"/> </picture>
            </div>
          </div>
        </div>
      </section>
  )
}
