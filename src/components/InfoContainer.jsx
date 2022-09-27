import React from 'react'
import Title from './shared/Title/Title'

const InfoContainer = ({title, data}) => {
  return (
      <div className='flex flex-col border border-teal-500 p-2'>
          <Title size="medium">{title}</Title>
          {data.map((item) => {
            return (
              <h3> {item.name} </h3>
            );
          })}
        </div>
       
  )
}

export default InfoContainer