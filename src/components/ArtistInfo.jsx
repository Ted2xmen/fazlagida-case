import React from 'react'
import Title from './shared/Title/Title'
import { Helmet } from 'react-helmet'

const ArtistInfo = ({ info }) => {
  return (
    <>
      <Helmet>
        <title>{info[0]?.artist.name}</title>
      </Helmet>
      <div className='flex flex-wrap justify-center items-center space-x-6 p-6 m-4 border border-red-400 lg:justify-between'>
        <img src={info[0]?.image[2]['#text']} alt="" />
        <div>
          <a target="_blank" rel="noreferrer" href={info[0]?.artist.url}>
            <Title size="hero" position="center">{info[0]?.artist.name} </Title>
          </a>
        </div>
      </div>
      </>
  )
}

export default ArtistInfo