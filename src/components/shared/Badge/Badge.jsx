import React from 'react'
import { FaHeadphonesAlt, FaPager } from "react-icons/fa";


const Badge = ({ type, children, icon }) => {

  let types
  let icons
  switch (type) {
    case "listeners":
      types = "border border-teal-500 text-black bg-teal-300"
      icons = <FaPager />
      break;
    case "playcount":
      types = "border border-teal-900 bg-teal-700"
      icons = <FaHeadphonesAlt />
      break;
    default:
      break;
  }

  return (
    <span className={`${types} text-sm inline-flex rounded backdrop-blur-0 items-center p-2 m-1`}>
      {icon && <i className='mr-2'> {icon ? icons : null} </i> }
      {children}
    </span>
  )
}

export default Badge