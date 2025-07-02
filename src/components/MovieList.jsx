import React from 'react';
import MovieCard from './MovieCard';
import HorizontalScroller from './HorizontalScroller';

const MovieList = ({ title, movies, bgblur=true, scr=true }) => {
  return (
    <div className={` px-6 ${ bgblur ? ' backdrop-blur-sm' : ''}`}>
      <h1 className='text-2xl w-fit px-2 font-bold font-serif py-3 text-white hover:text-red-700 hover:border-red-700 hover:border-2 hover:rounded-xl'>{title}</h1>
      <HorizontalScroller scr={scr}>
        {movies.map((movie) => {
          if (!movie?.poster_path) return null;
          return (
            <div key={movie.id} className="w-48 mt-2 mb-2 flex-shrink-0">
              <MovieCard posterPath={movie.poster_path} />
            </div>
          );
        })}
      </HorizontalScroller>
    </div>
  );
};

export default MovieList;