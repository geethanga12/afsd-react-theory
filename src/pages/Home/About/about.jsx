import React, { useEffect, useRef, useState } from 'react'
import './about.css'
import Button from '../../../common/component/Button/Button';

export default function About() {

  const [value, setValue] = useState(0);

  const inputRef = useRef(null);

  useEffect(() => {
    console.log('use efecec')
  }, [value]) 

  function setValueCountMax() {
    setValue(value + 1)
  }

  function setValueCountMin() {
    setValue(value - 1)
  }

  function setValueReset() {
    setValue(0);
  }

  return (
    <div className='aboutBox'>

      <div>
        <h1></h1>
      </div>

      <h1>About</h1>
      <h1>{value}</h1>

      <Button name={'count +'} bgColor={'red'} onClick={setValueCountMax}></Button>

      <Button name={'count -'} bgColor={'black'} onClick={setValueCountMin}></Button>

      <Button name={'reset'} bgColor={'blue'} onClick={setValueReset}></Button>

      <Button name={'Click'} bgColor={'black'} onClick={() => {inputRef.current.focus()}}></Button>
      
      <input type="text" ref={inputRef}/>

    </div>
  )
}

// useState
// useEffect
// useContext
// useRef
