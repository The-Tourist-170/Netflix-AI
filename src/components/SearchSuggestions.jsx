import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from '../components/MovieList';

const SearchSuggestions = () => {
  const { movieNames, movieResults } = useSelector(store => store.gemini);

  const loading = useSelector(store => store.gemini.loading);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <svg className="animate-spin h-24 w-24 text-red-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
        </svg>
      </div>
    );
  }

  if (!movieNames || !movieResults) return null;

  const data = Object.values(movieResults)
    .map(obj => obj.results)
    .filter(results => Array.isArray(results));

  return (
    <div className='p-4 m-4 text-white'>
      <div className='relative'>
        {movieNames.map((name, idx) => (
          <MovieList key={name} title={name} movies={data[idx]} bgblur={false} scr={false}/>
        ))}
      </div>
    </div>
  );
};

export default SearchSuggestions;
