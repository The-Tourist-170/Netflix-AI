import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { api_options, topRatedUrl } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    const topRatedMovies = useSelector(store => store.movies.topRatedMovies);

    const getTopRatedMovies = async () => {
        const data = await fetch(topRatedUrl, api_options);
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results));
      };

      useEffect(() => {
        if(!topRatedMovies) getTopRatedMovies();
      }, []);
};

export default useTopRatedMovies;