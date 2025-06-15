import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="flex gap-4 mt-4 my-4 md:m-0">
        <button className="flex items-center gap-2 bg-white text-black px-6 py-3 text-xl rounded-lg font-semibold hover:bg-gray-200 transition">
          <img src="src/assets/play.png" alt="Play" className="h-6 w-6" />
          <span>Play</span>
        </button>
        <button className="flex items-center gap-2 bg-gray-500 bg-opacity-50 text-white px-6 py-3 text-xl rounded-lg hover:bg-gray-600 transition">
          <img src="src/assets/info.png" alt="Info" className="h-6 w-6" />
          <span>More Info</span>
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;