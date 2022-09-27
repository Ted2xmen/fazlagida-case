import React from 'react'

const Badge = ({ type, children }) => {

  let types
  switch (type) {
    case "listeners":
      types = "border border-red-600 p-1 text-xs rounded m-1"
      break;
    case "playcount":
      types = "border border-white p-1 text-xs rounded m-1"
      break;
    default:
      break;
  }

  return (
    <span className={`${types}`}>
      {children}
    </span>
  )
}

export default Badge