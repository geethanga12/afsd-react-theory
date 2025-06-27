import './style.css'

export default function TI2({pH, type, onChange}) {

  return (
    <div>
      <input className='txtInput1' onChange={onChange} type={type} placeholder={pH}/>
    </div>
  )
}

// This is callback function version of TextInput