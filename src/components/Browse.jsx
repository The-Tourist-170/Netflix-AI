import React, { use, useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import MainCont from './MainCont'
import SecCont from './SecCont'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'

const Browse = () => {
  
  useNowPlayingMovies();  
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className='bg-black'>
      <Header/>
      <MainCont/>
      <SecCont/>
    </div>
  )
}

export default Browse