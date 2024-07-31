import { useState,useRef } from 'react'
import HeroSection from './components/heroSection'

function App() {
const [values,setValues]=useState('')


function handleOperations(value){
if(value==='AC'){
  setValues('0')
}
else if(value==='='){
let operation=eval(values)
setValues(operation)
}
else if(value==='+/-'){
  setValues(Number(values) * -1)
}
else{
  setValues(values+value)
}
console.log(8-2)
}
  return (
    <div className='flex justify-center'>
     <HeroSection
     value={values}
handleOperations={handleOperations}
     />
    </div>
  )
}

export default App
