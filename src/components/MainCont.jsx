import React from 'react';
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainCont = () => {

    const movies = useSelector((store) => store.movies?.nowPlayingMovies);

    if (!movies) return;

    const randomIndex = Math.floor(Math.random() * movies.length);
    const mainMovie = movies[randomIndex];

    const { original_title, overview, id } = mainMovie;

    return (
      <div className="relative w-full h-screen overflow-hidden bg-black">
        <VideoBackground movieId={id} />
        <VideoTitle title={original_title} overview={overview} />
      </div>
    );
};

export default MainCont;