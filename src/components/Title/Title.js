import React from 'react'
 

export default function Title({title, id}) {
 return (
    <>
 <h2 className="h2-title" id={id} data-link>{title} </h2>
 <div className="line"></div>
    </>
   )
}
