import { Fragment, useEffect, useState } from 'react'
import axios from 'axios'

import PageLayout from '../components/layouts/PageLayout'
import TopArtists from '../components/TopArtists'
import Title from '../components/shared/Title/Title'
import Button from '../components/shared/Button/Button'

import { useInfiniteQuery } from '@tanstack/react-query'
import SearchBox from '../components/SearchBox'

const Home = () => {

  const [searchTerm, setSearchTerm] = useState('')
  const [searchData, setSearchData] = useState([])

  useEffect(() => {
    const api_key = process.env.REACT_APP_LASTFM
    const fetchSearchData = (searchTerm) => {
      axios.get(`https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${searchTerm}&api_key=${api_key}&format=json`).then(result => setSearchData(result.data))
    }

    fetchSearchData(searchTerm)

  }, [searchTerm])


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

  if (isLoading && isFetching) return <div className='loading'>Loading...</div>
  if (isError) return <div>{error.message}</div>


  return (
    <PageLayout title="Home">
      <div>
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

      </div>
      <Button label="Load More" type="primary"
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      />
    </PageLayout>
  )
}

export default Home