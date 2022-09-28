import PageLayout from '../components/layouts/PageLayout'
import TopArtists from '../components/TopArtists'

import { useQuery } from '@tanstack/react-query'
import { fetchTopArtists } from '../api/config'

const Home = () => {

  const { isLoading, data, error, isError } = useQuery(['top-artists'],
    fetchTopArtists, {
    cacheTime: 10000,
  })

  if(isLoading) return <div className='loading'>Loading...</div>
  if (isError) return <div>{error.message}</div>
  // console.log({isLoading, isFetching}) cache control
  return (
    <PageLayout title="Home">
      <TopArtists artists={data?.data.artists.artist} />
    </PageLayout>
  )
}

export default Home