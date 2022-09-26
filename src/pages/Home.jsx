import React, { useState, useEffect } from 'react'
import PageLayout from '../components/layouts/PageLayout'
import TopArtists from '../components/TopArtists'

const Home = () => {
  const [artists, setArtists] = useState([])
  const api_key = process.env.REACT_APP_LASTFM

  useEffect(() => {
    const getData = () => {
      fetch(
        `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${api_key}&format=json`
      )
        .then((response) => response.json())
        .then((data) => setArtists(data.artists.artist)
        )
    }
    getData()
  }, [api_key])

  return (
    <PageLayout title="Home">
      <TopArtists artists={artists} /> 
    </PageLayout>
  )
}

export default Home