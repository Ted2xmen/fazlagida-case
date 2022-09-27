import React from 'react'
import Title from './shared/Title/Title'
import Card from './shared/Card/Card'
import { nanoid } from '@reduxjs/toolkit'

const InfoContainer = ({title, data}) => {
  return (
      <div className='flex flex-col border border-teal-500 p-2'>
          <Title size="medium">{title}</Title>
          {data.map((item, i) => {
            return (
              <h3 key={nanoid()}> {i + 1} -  {item.name} </h3>
              // <Card key={nanoid()} item={item} />
            );
          })}
        </div>
       
  )
}

export default InfoContainer