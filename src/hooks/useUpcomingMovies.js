import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { api_options, upcomingUrl } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    const upcomingMovies = useSelector(store => store.upcomingMovies);

    const getUpcomingMovies = async () => {
        const data = await fetch(upcomingUrl, api_options);
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results));
      };

      useEffect(() => {
        if(!upcomingMovies) getUpcomingMovies();
      }, []);
};

export default useUpcomingMovies;