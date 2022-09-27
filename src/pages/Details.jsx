import React, { useState, useEffect } from 'react'
import Container from '../components/Container'
import PageLayout from '../components/layouts/PageLayout'
import { useParams } from 'react-router-dom'

const Details = () => {
  const [albums, setAlbums] = useState([])
  const [tracks, setTracks] = useState([])

  const api_key = process.env.REACT_APP_LASTFM
  const { id } = useParams()

  useEffect(() => {
    const getAlbums = () => {
      fetch(
        `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&mbid=${id}&api_key=${api_key}&format=json`
      )
        .then((response) => response.json())
        .then((data) => setAlbums(data.topalbums.album)
        )
    }
    getAlbums()
  }, [api_key, id])

    useEffect(() => {
    const getTracks = () => {
      fetch(
        `https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&mbid=${id}&api_key=${api_key}&format=json`
      )
        .then((response) => response.json())
        .then((data) => setTracks(data.toptracks.track)
        )
    }
    getTracks()
  }, [api_key, id])

  console.log(albums, "albums")

  console.log(tracks, "tracks")
  return (
    <PageLayout title="Details">
      <Container albums={albums} tracks={tracks}  />
    </PageLayout>
  )
}

export default Details