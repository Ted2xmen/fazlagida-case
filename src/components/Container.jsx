import React from 'react'
import ArtistInfo from './ArtistInfo'
import InfoContainer from './InfoContainer';


const Container = ({ albums, tracks}) => {
  return (
    <>
      <div>
        <ArtistInfo info={albums} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 m-4 gap-5">
        <InfoContainer data={albums} title="Top Albums" />
        <InfoContainer data={tracks} title="Top Tracks" />
      </div>
    </>
  )
}

export default Container