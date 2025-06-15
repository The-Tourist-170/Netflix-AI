import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import React from "react";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className=" w-full">
        <iframe
          className="w-screen aspect-video"
          src={
            "https://www.youtube.com/embed/" +
            trailerVideo?.key +
            "?autoplay=1&mute=1&loop=1&playlist=" +
            trailerVideo?.key +
            "&controls=0&modestbranding=1&showinfo=0&rel=0&disablekb=1"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};
export default VideoBackground;🐛