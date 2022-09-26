import React from 'react'

const Card = ({color}) => {


  return (
    <div className=" ">
        <div>
            <h2 className={`text-xl font-bold text-${color}-400`}>Card</h2>
        </div>
    </div>
  )
}

export default Card