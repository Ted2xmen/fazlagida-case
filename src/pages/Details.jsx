import React, { useState, useEffect } from 'react'
import Container from '../components/Container'
import PageLayout from '../components/layouts/PageLayout'
import { useParams } from 'react-router-dom'

const Details = () => {
  const [albums, setAlbums] = useState([])
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


  return (
    <PageLayout title="Details">
      {id}
      <Container />
    </PageLayout>
  )
}

export default Details