import React from 'react'
import Title from './shared/Title/Title'
import Card from './shared/Card/Card'
import { nanoid } from '@reduxjs/toolkit'

const InfoContainer = ({title, data}) => {
  return (
      <div className='flex flex-col gap-4 p-2 m-4'>
          <Title size="medium">{title}</Title>
          {data.map((item) => {
            return (
            <Card cardType="InfoContainer" key={nanoid()} item={item} />
            );
          })}
        </div>
       
  )
}

export default InfoContainer