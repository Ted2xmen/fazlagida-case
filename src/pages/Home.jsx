import { Fragment } from 'react'
import axios from 'axios'

import PageLayout from '../components/layouts/PageLayout'
import TopArtists from '../components/TopArtists'
import Title from '../components/shared/Title/Title'
import Button from '../components/shared/Button/Button'

import { useInfiniteQuery } from '@tanstack/react-query'
// import { useInView } from 'react-intersection-observer';

const Home = () => {
  // const { ref, inView, entry } = useInView({
  //   threshold: 0,
  // });
  const { isLoading, data, error, isError, hasNextPage, fetchNextPage, isFetching, isFetchingNextPage } = useInfiniteQuery(['top-artists'],
    async ({ pageParam = 1 }) => {
      const res = await axios.get(`https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${process.env.REACT_APP_LASTFM}&page=${pageParam}&format=json`)
      return res.data
    },{
      getNextPageParam: (_lastPage, allPages) => {
        const nextPage = allPages.length + 1
        return nextPage
      }
    })
  // useEffect(() => {
  //   if (inView) {
  //     fetchNextPage()
  //   }
  // }, [inView]) instead added button

  if (isLoading && isFetching) return <div className='loading'>Loading...</div>
  if (isError) return <div>{error.message}</div>

  return (
    <PageLayout title="Home">
      <div>
        <Title position="center" size="large">Top Artists 2022</Title>
        {data.pages.map((page) => {
          return (
            <Fragment key={page.nextId}>
              <div className='grid grid-cols-1 lg:grid-cols-2 m-4 gap-4'>
                <TopArtists artists={page} />
              </div>
            </Fragment>
          );
        })}
      </div>
      <Button label="Load More" type="primary"
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      />
      <div>
        {!isFetchingNextPage && isFetching ? "fetching..." : ""}
      </div>
    </PageLayout>
  )
}

export default Home