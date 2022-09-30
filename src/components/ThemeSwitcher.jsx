import React, {useState} from 'react'
import {FaSun, FaMoon} from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { handleTheme } from '../redux/main/mainSlice'

const ThemeSwitcher = () => {
  const theme = useSelector(state => state.main.theme)
  const [dark, setDark] = useState(theme)
  const dispatch = useDispatch()

  const submitTheme = () => {
    if(dark) {
      setDark(false)
      dispatch(handleTheme(false))
    }
    if(!dark) {
      setDark(true)
      dispatch(handleTheme(true))
    }
  }
  
  
  return (
    <div className='flex items-center space-x-12'>
      <div>
        {dark ? <button onClick={submitTheme} className='bg-slate-700 text-teal-100 px-5 p-2 rounded-full'>
          <FaSun />
        </button> : 
        <button onClick={submitTheme} className='bg-slate-700 text-teal-100 px-5 p-2 rounded-full'>
          <FaMoon />
          </button>}
      </div>
       
    </div>
  )
}

export default ThemeSwitcher