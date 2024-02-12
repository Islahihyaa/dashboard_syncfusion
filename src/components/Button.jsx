import React from 'react'

const Button = ({ color, bgColor, text, borderRadius, size, width, bgHoverColor}) => {
  return (
    <button
      type='button'     
      style={{ backgroundColor:bgColor, color, borderRadius}}
      className= {`text-${size}, w-${width} p-3 hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {text}
    </button>
  )
}

export default Button