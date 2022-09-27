import PageLayout from '../components/layouts/PageLayout'
import TopArtists from '../components/TopArtists'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Badge from '../components/shared/Badge/Badge'


const Home = () => {
  const api_key = process.env.REACT_APP_LASTFM

  const fetchTopArtists = () => {
    return axios.get(`https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${api_key}&format=json`)
  }
  const { isLoading, data, error, isError, isFetching } = useQuery(['top-artists'], fetchTopArtists, {
    cacheTime: 5000,
  })

  if(isLoading) return <div className='flex justify-center h-screen text-red-600 text-4xl'>Loading...</div>

  if (isError) return <div>{error.message}</div>
  // console.log({isLoading, isFetching}) cache control
  return (
    <PageLayout title="Home">
      <TopArtists artists={data?.data.artists.artist} />
    </PageLayout>
  )
}

export default Home