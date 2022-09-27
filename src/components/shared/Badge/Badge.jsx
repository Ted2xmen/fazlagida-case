import React from 'react'
import { FaHeadphonesAlt, FaGlobe } from "react-icons/fa";


const Badge = ({ type, children, icon }) => {

  let types
  let icons
  switch (type) {
    case "listeners":
      types = "badge-listeners"
      icons = <FaGlobe />
      break;
    case "playcount":
      types = "badge-playcount"
      icons = <FaHeadphonesAlt />
      break;
    default:
      break;
  }

  return (
    <span className={`${types} badge`}>
      {icon && <i className='mr-2'> {icon ? icons : null} </i>}
      {children}
    </span>
  )
}

export default Badge