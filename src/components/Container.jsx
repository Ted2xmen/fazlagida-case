import React from 'react'
import ArtistInfo from './ArtistInfo'
import InfoContainer from './InfoContainer';


const Container = ({ albums, tracks}) => {
  return (
    <>
      <div>
        <ArtistInfo info={albums} />
      </div>
      <div className="grid grid-cols-2 gap-5">
        <InfoContainer data={tracks} title="Top Tracks" />
        <InfoContainer data={albums} title="Top Albums" />
      </div>
    </>
  )
}

export default Container