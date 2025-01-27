import React from 'react'
import './Button.css';
import doubleArroW from '../../assets/arrow-double-down.svg';
const Button = () => {
  return (
    <>
        <button className="flex items-center justify-center h-14 w-40 sm:h-16 sm:w-48 lg:h-20 lg:w-60 text-lg sm:text-xl lg:text-2xl mb-8 rounded Hero-btn">
          Explore Offering <img src={doubleArroW} alt="" />
        </button>
    </>
  )
}

export default Button