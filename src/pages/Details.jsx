import Container from '../components/Container'
import PageLayout from '../components/layouts/PageLayout'
import { useParams } from 'react-router-dom'

import { fetchTopAlbums, fetchTopTracks } from '../api/config'
import { useQuery } from '@tanstack/react-query'



const Details = () => {
  
  const { id } = useParams()

  const dataTrack = useQuery(['top-tracks', id],
    () => fetchTopTracks(id), {
    cacheTime: 10000,
  })

  const dataAlbum = useQuery(['top-albums', id],
    () => fetchTopAlbums(id), {
    cacheTime: 10000,
  })

  if (dataAlbum.isLoading || dataTrack.isLoading) return <div className='loading'>Loading...</div>

  return (
    <PageLayout title="Details">
      <Container albums={dataAlbum?.data.data.topalbums.album} tracks={dataTrack?.data.data.toptracks.track} />
    </PageLayout>
  )
}

export default Details