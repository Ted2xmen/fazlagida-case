import React from 'react'
import ArtistInfo from './ArtistInfo'


const Container = () => {
  return (
    <>
      <div>
        <ArtistInfo />
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div>Top Tracks</div>
        <div>Top Albums</div>
      </div>
    </>
  )
}

export default Container