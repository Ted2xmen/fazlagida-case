import React from 'react'
import Title from './shared/Title/Title'

const ArtistInfo = ({info}) => {
  console.log(info)
  return (
    <div className='flex items-center space-x-12 p-12 m-5 border border-red-400 justify-between'>
        <div> 
          <a target="_blank" rel="noreferrer" href={info[0]?.artist.url}> 
             <Title size="medium" position="center">{info[0]?.artist.name} </Title>
          </a>
        </div>
        <div>
          <h3>234234</h3>
          <h3>234234</h3>
        </div>
    </div>
  )
}

export default ArtistInfo