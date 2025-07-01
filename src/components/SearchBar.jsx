import React, { useRef } from 'react';
import ai from '../utils/gemini';
import { api_options } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addGeminiMovies } from "../utils/geminiSlice";

const SearchBar = () => {
    const inputText = useRef(null);
    const dispatch = useDispatch();

    const searchMovieTMDB = async (movie) => {
        const movSearchUrl = 'https://api.themoviedb.org/3/search/movie?query='+ movie +
        '&include_adult=false&language=en-US&page=1';
        const data = await fetch(movSearchUrl, api_options);

        return await data.json();
    };

    const handleSearchProcess = async () => {
        const queryText = "Act as a movie recommendation system, and suggest 5 movies for the query: " + inputText.current?.value + ". Only give 5 movies , comma seprated, like the example result given ahead. Example Result: War, The Batman, Dr Strange, Nosferatu, Django Unchained. Also Don't explicitly mention bollywood or hollywood.";
        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash",
            contents: queryText,
        });        

        if(!response){
            console.error("Error: No response from Gemini AI model.");
            return;
        }

        const result = response?.text.split(",");
        const promiseArray = result.map((movie) => searchMovieTMDB(movie));
        const tmdbData = await Promise.all(promiseArray);
        dispatch(addGeminiMovies({movieNames: result, movieResults: tmdbData}));        
    };

    return (
        <div className='p-[10%]'>
            <form className='flex' onSubmit={(e) => {e.preventDefault()}}>
                <input type="text" ref={inputText}
                            className="w-[85%] m-4 p-4 text-white modify-text 
                            border-3 rounded-4xl backdrop-blur-2xl outline-0 
                            hover:border-red-700 focus:border-red-700" 
                            placeholder='What would you like to watch?'/>
                <button 
                        className='p-2 m-4 bg-red-700 
                        hover:bg-red-900 border-3 text-white 
                        rounded-4xl font-semibold'
                        onClick={handleSearchProcess}>
                    <img src="src/assets/search_icon.png" alt="Search" className='p-2 w-10'/>
                </button>
            </form>
        </div>
    );
};

export default SearchBar;