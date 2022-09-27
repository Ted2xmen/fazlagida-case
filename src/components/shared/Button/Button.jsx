import React from 'react'

const Button = ({label, type, ...props}) => {

    let types 
    switch (type) {
        case "outline":
           types = "border border-white text-white hover:bg-white hover:text-black" 
            break;
         case "normal":
           types = "border border-black text-black hover:bg-black hover:text-white" 
            break;    
        default:
            break;
    }

    // needs more

  return (
    <button {...props} className={`m-1 mt-4 items-start bg-orange-700 ${types} p-1 text-xs`}>{label}</button>
  )
}

export default Button