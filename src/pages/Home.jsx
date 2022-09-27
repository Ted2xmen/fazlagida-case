import React, { useState, useEffect } from 'react'
import PageLayout from '../components/layouts/PageLayout'
import TopArtists from '../components/TopArtists'
import {useQuery} from '@tanstack/react-query'
import axios from 'axios'


const Home = () => {
  const api_key = process.env.REACT_APP_LASTFM

  const {isLoading, data} = useQuery(['top-artists'], () => {
     return axios.get(`http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${api_key}&format=json`)
  })

  if(isLoading) return <div>Loading...</div>

  return (
    <PageLayout title="Home">
      <TopArtists artists={data?.data.artists.artist} /> 
    </PageLayout>
  )
}

export default Home