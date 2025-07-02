import React from 'react'
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
import { AnimatePresence, motion } from "framer-motion";

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
      <AnimatePresence>
        {menuView && (
          <motion.div
            key="logout"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50"
          >
            <LogOut />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {searchView ? (
          <motion.div
            key="search"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.1 }}
            className="fixed inset-0 z-40"
          >
            <Search/>
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.1 }}
            className='bg-black overflow-y-scroll custom-scrollbar h-screen'
          >
            <MainCont/>
            <SecCont/>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Browse;