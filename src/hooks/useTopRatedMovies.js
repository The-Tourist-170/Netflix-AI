import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { api_options, topRatedUrl } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    const getTopRatedMovies = async () => {
        const data = await fetch(topRatedUrl, api_options);
        const json = await data.json();
        // console.log("popslice "+json);
        dispatch(addTopRatedMovies(json.results));
      };

      useEffect(() => {
        getTopRatedMovies();
      }, []);
};

export default useTopRatedMovies;