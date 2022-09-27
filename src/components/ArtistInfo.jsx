import React from 'react'
import Title from './shared/Title/Title'

const ArtistInfo = ({info}) => {
  return (
    <div className='flex items-center space-x-12 p-12 m-4 border border-red-400 justify-between'>
          <img src={info[0]?.image[2]['#text']} alt="" />
        <div> 
          <a target="_blank" rel="noreferrer" href={info[0]?.artist.url}> 
             <Title size="hero" position="center">{info[0]?.artist.name} </Title>
          </a>
        </div>

        <p>{info[0]?.artist.playcount}</p>
     
    </div>
  )
}

export default ArtistInfo