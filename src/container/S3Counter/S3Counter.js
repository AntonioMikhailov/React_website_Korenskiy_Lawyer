import React from 'react'
// import './S3Counter.scss'
import icon from '../../data/icons'
export default function S3Counter() {
const S3Item = [
  {img: icon.sec_3_1, num: '1565', text: 'Довольных клиентов'},
  {img: icon.sec_3_2, num: '21', text: 'Год работы'},
  {img: icon.sec_3_3, num: '96%', text: 'Выигранных дел'},
  {img: icon.sec_3_4, num: '26', text: 'Наград и премий'},
]
return (
    <section className="s3">
        <div className="container">
          <div className="s3-row">
            {S3Item.map((item, index)=> {
              return (
             <div className="s3-item" key={index} >
              <div className="s3-item__icon"><img src={item.img} alt="#"/></div>
              <div className="s3-item__number">{item.num}</div>
              <div className="s3-item__text">{item.text}</div>
              </div>
              )
            })}
          </div>
        </div>
      </section>
  )
}
