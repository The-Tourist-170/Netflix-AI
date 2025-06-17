import React, { useRef } from 'react';
import ai from '../utils/gemini';

const SearchBar = () => {
    const inputText = useRef(null);
    // console.log(inputText.current.value);

    const handleSearchProcess = async () => {
        const queryText = "Act as a movie recommendation system, and suggest some movies for the query: " + inputText.current?.value + ". Only give names of 5 movies (filter only bollywood or hollywood movies if mentioned else give movies from around the globe but always give 1 bollywood movies, until not asked to give a specific country based movie), comma seprated, like the example result given ahead. Example Result: War, The Batman, Dr Strange, Nosferatu, Django Unchained. Also Don't explicitly mention bollywood or hollywood.";
        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash",
            contents: queryText,
        });
        console.log(inputText.current.value);
        console.log(queryText);
        console.log(response.text);
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