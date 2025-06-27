import React from 'react'
import './style.css'

export default function Button ({name, bgColor, onClick}) {

  return(
    <div>
      <button onClick={() => onClick()} style={{backgroundColor: bgColor}} className='btn1'>{name}</button>
    </div>
  )
}