import React from 'react'

const Button = ({label, shadow, type, ...props}) => {

    let types 
    switch (type) {
        case "secondary":
           types = "btn-secondary" 
            break;
         case "primary":
           types = "btn-primary" 
            break;    
        default:
            break;
    }

    let isShadow = shadow ? "shadow-lg hover:shadow-none" : null

  return (
    <button {...props} data-testid="button" disabled={!label} className={`btn ${isShadow} ${types}`}>{label}</button>
  )
}

export default Button