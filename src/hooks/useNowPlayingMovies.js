import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { nowPlayingUrl, api_options } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        const data = await fetch(nowPlayingUrl, api_options);
        const json = await data.json();
        // console.log(json);
        dispatch(addNowPlayingMovies(json.results));
      };

      useEffect(() => {
        getNowPlayingMovies();
      }, []);
};

export default useNowPlayingMovies;