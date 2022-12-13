import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'

export default function S13Contacts() {
  const s13Area = useRef()
  const s13Form = useRef()

  const [ buttonValue, setButttonValue] = useState('отправить сообщение')
  const [addClass, setAddClass] = useState('s13-buttom')
  const [values, setValues] = useState(  
    {
      name: '',
      email: '',
      textarea: ''
   }
  )
function handleName(e) {
 setValues({...values, name: e.target.value})  
 }
 function handlEmail(e) {
  setValues({...values, email: e.target.value})  
 }
  function handleTextarea(e) {
    setValues({...values, textarea: e.target.value})  
 }

function handleSubmit(e) { 
 e.preventDefault()
  if(values.name && values.email && values.textarea ) {
  setButttonValue('сообщение отправлено')
    setAddClass('s13-buttom')
 setTimeout(() => {
  setValues(
    {...values,
    name: '',
    email: '',
    textarea: ''
   }
    )
 }, 3000);
     
  } else {
    setButttonValue('заполните все поля')
    setAddClass('s13-buttom active-warn')
 }
 }
return (
    <section className="s13">
    <div className="container">
      <h2 className="s13-title" id="s13">Свяжитесь с нами</h2>
      <div className="s13-line line"></div>
      <div className="s13-text body">Для связи с нами выберите любой удобный для Вас способ. Также Вы можете связаться с
        конкретным юристом напрямую выбрав его в секции "О нас". Желаем Вам успешных решений Ваших юридических
        проблем!</div>
      <div className="s13-row">
        <div className="s13-left">
<iframe title='#' src="https://yandex.ru/map-widget/v1/?um=constructor%3A200858ac4173d9f800e734a67a99b617a
79b1b93a94682ff141b6d086acd99d9&amp;
source=constructor" width="500" height="400" frameBorder="0"></iframe>
        </div>
        <div className="s13-right">
    
<form ref={s13Form}
onSubmit={ handleSubmit} 
className="s13-formRow" action="#"> 
<input value={values.name} onChange={handleName}
type="text" className="s13-input" placeholder="Ваше имя" name="name"/>
{}
<div className="s13-form-span">
{ !values.name ? <span>Введите имя*</span> : null}
</div>
 <input  value={values.email} onChange={handlEmail}
 type="text" className="s13-input" placeholder="Ваш E-mail" name="email"/> 
 <div className="s13-form-span">
 { !values.email ? <span>Введите фамилию*</span> : null}
 </div>
 <textarea value={values.textarea} ref={s13Area}
 onChange={handleTextarea}
 className="s13-textarea" placeholder="Ваше собщение" name="textarea"></textarea> 

 <div className="s13-form-span">
 { !values.textarea ? <span>Введите текст сообщения*</span> : null}
 </div>
 {}
 <button  className={ addClass}>{buttonValue}</button> 
 </form>
</div>
</div>
    </div>
  </section>
)
}

 