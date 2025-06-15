import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecCont = () => {

    // const movies = useSelector((store) => {store.movies}console.log);
    const movies = useSelector((store) => store.movies);

    return (
        <div className="sec-container">
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        </div>
    );
};

export default SecCont;