import React, { useState } from 'react'
import './about.css'
import TI2 from '../../../common/component/TextInput/TI2'
import Button from '../../../common/component/Button/Button'

export default function SubmitForm() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState(0);
  const [check, setCheck] = useState(false);

  function setValueName(event) {
    setName(event.target.value);
  }

  function setValueAddress(event) {
    setAddress(event.target.value);
  }

  function setValueAge(event) {
    setAge(Number(event.target.value));
  }

  function setValueCheck(event) {
    setCheck(event.target.checked)
  }

  function submitData() {
    if (check && name.trim() !== "" && address.trim() !== "" && age > 0) {
      console.log(name);
      console.log(address);
      console.log(age)
      console.log(check)
    } else {
      console.log('Cannot Submit')
    }
  }
  
  return (
    <div className='submitForm'>
      <h1>SubmitForm</h1>
      
      <TI2 type={'text'} pH={'Name'} onChange={setValueName}></TI2>
      <TI2 type={'text'} pH={'Address'} onChange={setValueAddress}></TI2>
      <TI2 type={'number'} pH={'Age'} onChange={setValueAge}></TI2>
      <div>
        <input onChange={setValueCheck} type="checkbox" id='check'/>
        <label htmlFor="check">Sign Up Newsletter</label>
      </div>
      
      <Button name={'Submit'} bgColor={'blue'} onClick={submitData}></Button>
      
    </div>
  )
}