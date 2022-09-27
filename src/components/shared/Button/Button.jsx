import React from 'react'

const Button = ({label, shadow, type, ...props}) => {

    let types 
    switch (type) {
        case "secondary":
           types = "bg-teal-900 text-white " 
            break;
         case "primary":
           types = "border border-black bg-teal-100 text-black" 
            break;    
        default:
            break;
    }

    let isShadow = shadow ? "shadow-lg" : null

  return (
    <button {...props} className={`m-1 mt-4 rounded items-start ${isShadow} ${types} p-2 text-sm`}>{label}</button>
  )
}

export default Button