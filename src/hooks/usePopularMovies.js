import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { api_options, popularUrl } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
    const dispatch = useDispatch();

    const getPopularMovies = async () => {
        const data = await fetch(popularUrl, api_options);
        const json = await data.json();
        // console.log("popslice "+json);
        dispatch(addPopularMovies(json.results));
      };

      useEffect(() => {
        getPopularMovies();
      }, []);
};

export default usePopularMovies;