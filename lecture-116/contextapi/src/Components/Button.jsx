import React from 'react'
import Component from './Component'

const Button = () => {
  return (
    <div>
      <button onClick={()=> CSSMathValue.setCount((count)=> count + 1)}><span><Component/></span>Click Me</button>
    </div>
  )
}

export default Button
