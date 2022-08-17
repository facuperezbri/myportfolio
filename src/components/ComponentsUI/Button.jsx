import React from 'react'

const Button = ({ children, className }) => {
  return (
    <button className={`w-[120px] border-solid border-[1px] border-black py-2 rounded-[4px] font-extralight hover:w-[140px] duration-200 hover:shadow-lg ${className}`}>
      {children}
    </button>
  )
}

export default Button