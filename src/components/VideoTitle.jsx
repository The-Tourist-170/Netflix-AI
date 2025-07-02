import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMute } from "../utils/muteSlice";

const VideoTitle = ({ title, overview }) => {

  return (
    <div className="absolute inset-0 flex flex-col justify-center text-white bg-gradient-to-r from-black/80 via-black/40 to-transparent px-6 md:px-24 pointer-events-none">
      <div className="pointer-events-auto">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="inline-block py-6 text-md max-w-md">{overview}</p>
        <div className="flex gap-4 mt-4 my-4 md:m-0">
          <button className="flex items-center gap-2 bg-white opacity-90 text-black px-4 py-2 text-xl rounded-lg font-semibold hover:bg-gray-200 transition">
            <img src="src/assets/play.png" alt="Play" className="h-6 w-6" />
            <span>Play</span>
          </button>
          <button className="flex items-center gap-2 bg-gray-500 bg-opacity-50 text-white px-4 py23 text-xl rounded-lg hover:bg-gray-600 transition">
            <img src="src/assets/info.png" alt="Info" className="h-6 w-6" />
            <span>More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default VideoTitle;