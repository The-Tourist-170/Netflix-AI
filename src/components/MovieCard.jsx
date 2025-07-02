import React from 'react';
import { img_cdn_url } from '../utils/constants';

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="pr-2 relative overflow-hidden">
      <img
        alt="Movie Poster"
        src={img_cdn_url + posterPath}
        className="
          w-full rounded-lg object-cover
          transition-all ease-in-out
          hover:border-3 hover:border-red-700
        "
        style={{ maxWidth: 'none' }}
      />
    </div>
  );
};

export default MovieCard;