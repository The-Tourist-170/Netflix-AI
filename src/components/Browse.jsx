import React, { use, useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import MainCont from './MainCont'
import SecCont from './SecCont'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import Search from './Search'
import { useSelector } from 'react-redux'
import LogOut from './LogOut'

const Browse = () => {

  const searchView = useSelector(store => store.search.searchView);
  const menuView = useSelector(store => store.menu.menuView);

  useNowPlayingMovies();  
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header/>
      {/* {menuView ? <LogOut/> : } */}
      {searchView ? <Search/> : 
                    menuView ? <LogOut/> : <div className='bg-black'>
                                              <MainCont/>
                                              <SecCont/>
                                           </div>
      }
    </div>
  );
};

export default Browse