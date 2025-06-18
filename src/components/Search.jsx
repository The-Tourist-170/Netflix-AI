import React from 'react';
import SearchBar from './SearchBar';
import SearchSuggestions from './SearchSuggestions';
import { bgUrl } from '../utils/constants';

const Search = () => {
    return (
        <div className='bg-black overflow-y-scroll custom-scrollbar h-screen relative'>
            <img src={bgUrl} className='relative opacity-30'/>
            <div className='absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center'>
                <SearchBar/>
                <SearchSuggestions/>
            </div>            
        </div>
    );
};

export default Search;