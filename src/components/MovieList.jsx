import React from 'react';
import MovieCard from './MovieCard';
import HorizontalScroller from './HorizontalScroller';

const MovieList = ({ title, movies, bgblur=true, scr=true }) => {
  return (
    <div className={` px-6 ${ bgblur ? ' backdrop-blur-sm' : ''}`}>
      <h1 className='text-2xl font-bold font-serif py-3 text-white'>{title}</h1>
      <HorizontalScroller scr={scr}>
        {movies.map((movie) => {
          if (!movie?.poster_path) return null;
          return (
            <div key={movie.id} className="w-48 flex-shrink-0">
              <MovieCard posterPath={movie.poster_path} />
            </div>
          );
        })}
      </HorizontalScroller>
    </div>
  );
};

export default MovieList;