import React from 'react';
import { img_cdn_url } from '../utils/constants';

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null; // safety check

  return (
    <div className="pr-2">
      <img 
        alt="Movie Poster" 
        src={img_cdn_url + posterPath} 
        className="w-full h-auto rounded-lg object-cover"
        />
    </div>
  );
};

export default MovieCard;
