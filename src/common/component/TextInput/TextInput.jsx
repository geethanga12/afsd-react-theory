import React, { useState } from 'react'
import './style.css'

export default function TextInput({pH, type}) {

  const [text, setText] = useState();

  function onChangeText(event) {
    setText(event.target.value);
    console.log('Typed Text:', event.target.value);
  }

  return (
    <div>
      <input value={text} onChange={onChangeText} className='txtInput1' type={type} placeholder={pH}/>
      <p>Output: {text}</p>
    </div>
  )
}


// This can use also as callback function(TI2.jsx)