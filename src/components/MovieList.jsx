import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({title, movies}) => {
    return (
        <div className="movie-list">
            <div>
                <h1>{title}</h1>
                <div>
                    <MovieCard />
                </div>
            </div>
        </div>
    );
};

export default MovieList;