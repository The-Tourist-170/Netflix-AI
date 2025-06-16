import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecCont = () => {
  const movies = useSelector((store) => store.movies);

  const nowPlaying = movies?.nowPlayingMovies;
    // console.log('Now Playing Movies:', nowPlaying);
  const popularMovies = movies?.popularMovies;
    // console.log('Popular Movies:', popularMovies);
  const topRatedMovies = movies?.topRatedMovies;
    // console.log('Top Rated Movies:', topRatedMovies);
  const upcomingMovies = movies?.upcomingMovies;
    // console.log('Upcoming Movies:', upcomingMovies);
  
  if (!Array.isArray(nowPlaying) || nowPlaying.length === 0) {
    return <div>Loading now playing movies...</div>;
  }
  if (!Array.isArray(popularMovies) || popularMovies.length === 0) {
    return <div>Loading Popular movies...</div>;
  }
  if (!Array.isArray(topRatedMovies) || topRatedMovies.length === 0) {
    return <div>Loading Top Rated movies...</div>;
  }
  if (!Array.isArray(upcomingMovies) || upcomingMovies.length === 0) {
    return <div>Loading Upcoming movies...</div>;
  }

  return (
    <div className="-mt-30 relative z-10">
      <MovieList title="Now Playing" movies={nowPlaying} />
      <MovieList title="Popular" movies={popularMovies} />
      <MovieList title="Top Rated" movies={topRatedMovies} />
      <MovieList title="Upcoming" movies={upcomingMovies} />
    </div>
  );
};

export default SecCont;