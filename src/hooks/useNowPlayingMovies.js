import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nowPlayingUrl, api_options } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);

    const getNowPlayingMovies = async () => {
        const data = await fetch(nowPlayingUrl, api_options);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
      };

      useEffect(() => {
        if(!nowPlayingMovies) getNowPlayingMovies();
      }, []);
};

export default useNowPlayingMovies;