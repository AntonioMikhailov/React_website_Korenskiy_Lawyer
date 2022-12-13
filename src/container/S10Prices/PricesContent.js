import React from 'react'

export default function PricesContent( {  title, sub1,sub2,sub3,sub4, sub5, text1,text2,text3,text4, text5}) {

 
 
  return (
   <>
      <div className="s10-column"  >
          <div className="s10-item">
            <div className="s10-item__title">{title}</div>
            <ul>

             <li className="s10-item__cell s10-cell__dark">
                <div className="s10-cell__title">{sub1}</div>
                <div className="s10-cell__text">{text1}</div>
              </li>
              <li className="s10-item__cell  ">
                <div className="s10-cell__title">{sub2}</div>
                <div className="s10-cell__text">{text2}</div>
              </li>
              <li className="s10-item__cell s10-cell__dark">
                <div className="s10-cell__title">{sub3}</div>
                <div className="s10-cell__text">{text3}</div>
              </li>
              <li className="s10-item__cell  ">
                <div className="s10-cell__title">{sub4}</div>
                <div className="s10-cell__text">{text4}</div>
              </li>
              <li className="s10-item__cell s10-cell__dark">
                <div className="s10-cell__title">{sub5}</div>
                <div className="s10-cell__text">{text5}</div>
              </li>
              

            </ul>
            <div className="s10-item__button">заказать услугу</div>

          </div>
        </div>
   </>
  )
}
