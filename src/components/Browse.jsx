import React, { use, useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainCont from './MainCont'
import SecCont from './SecCont'

const Browse = () => {
  
  useNowPlayingMovies();  
  
  return (
    <div>
      <Header/>
      <MainCont/>
      <SecCont/>
    </div>
  )
}

export default Browse