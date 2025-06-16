import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { api_options, upcomingUrl } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    const getUpcomingMovies = async () => {
        const data = await fetch(upcomingUrl, api_options);
        const json = await data.json();
        // console.log("popslice "+json);
        dispatch(addUpcomingMovies(json.results));
      };

      useEffect(() => {
        getUpcomingMovies();
      }, []);
};

export default useUpcomingMovies;