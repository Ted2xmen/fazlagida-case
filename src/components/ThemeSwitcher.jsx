import React from 'react'
import {FaSun, FaMoon} from 'react-icons/fa'

const ThemeSwitcher = () => {
  return (
    <div className='flex items-center space-x-12'>
        <div className='hidden'>
            <FaSun />
        </div>
        <div>
            <FaMoon />
        </div>
    </div>
  )
}

export default ThemeSwitcher