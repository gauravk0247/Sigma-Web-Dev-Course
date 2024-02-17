import React from 'react'
import Component from './Component'

const Button = ({count}) => {
  return (
    <div>
      <button><span><Component count={count}/></span>Click Me</button>
    </div>
  )
}

export default Button
