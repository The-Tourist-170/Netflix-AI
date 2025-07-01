import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { api_options, popularUrl } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
    const dispatch = useDispatch();

    const popularMovies = useSelector(store => store.movies.popularMovies);

    const getPopularMovies = async () => {
        const data = await fetch(popularUrl, api_options);
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
      };

      useEffect(() => {
        if(!popularMovies) getPopularMovies();
      }, []);
};

export default usePopularMovies;