import { Fragment, useEffect, useState, ref } from 'react'
import axios from 'axios'

import PageLayout from '../components/layouts/PageLayout'
import TopArtists from '../components/TopArtists'
import Title from '../components/shared/Title/Title'
import SearchBox from '../components/SearchBox'

import { useInfiniteQuery } from '@tanstack/react-query'
import { useInView } from 'react-intersection-observer'


const Home = () => {
  //search related
  const [searchTerm, setSearchTerm] = useState('')
  const [searchData, setSearchData] = useState([])
  useEffect(() => {
    const api_key = process.env.REACT_APP_LASTFM
    const fetchSearchData = (searchTerm) => {
      axios.get(`https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${searchTerm}&api_key=${api_key}&format=json`).then(result => setSearchData(result.data))
    }

    fetchSearchData(searchTerm)

  }, [searchTerm])
  //search related

  // infinite scrolling
  const { isLoading, data, error, isError, hasNextPage, fetchNextPage, isFetching, isFetchingNextPage } = useInfiniteQuery(['top-artists'],
    async ({ pageParam = 1 }) => {
      const res = await axios.get(`https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${process.env.REACT_APP_LASTFM}&page=${pageParam}&format=json`)
      return res.data
    }, {
    getNextPageParam: (_lastPage, allPages) => {
      const nextPage = allPages.length + 1
      return nextPage
    }
  })

  const { ref, inView } = useInView()
  useEffect(() => {
    if (inView) fetchNextPage()
  }, [inView, fetchNextPage])
 
  if (isLoading && isFetching) return <div className='loading'>Loading...</div>
  if (isError) return <div>{error.message}</div>
 // infinite scrolling

  return (
    <PageLayout title="Home">
        <SearchBox setSearchTerm={setSearchTerm} />
        <Title
          position="center"
          size="large">{searchData.results ? "Search Results" : "Top Artists 2022"}</Title>

        {searchData.results ?
          <TopArtists searchResults={searchData?.results} />
          :
          <>
            {data.pages.map((page) => {
              return (
                <Fragment key={page.nextId}>
                  <div>
                    <TopArtists artists={page} />
                  </div>
                </Fragment>
              );
            })}
          </>}

      <div ref={ref}>
        {isFetchingNextPage
          ? <h2 className='loading'> loading.. </h2>
          : null}
      </div>
    </PageLayout>
  )
}

export default Home