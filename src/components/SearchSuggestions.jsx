import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from '../components/MovieList';

const SearchSuggestions = () => {
  const { movieNames, movieResults } = useSelector(store => store.gemini);

  if (!movieNames || !movieResults) return null;

  const data = Object.values(movieResults)
    .map(obj => obj.results)
    .filter(results => Array.isArray(results));

  console.log("isArray:", Array.isArray(data)); // true
  console.log("data:", data); // should show arrays of movie objects

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
