import React from 'react';
import SearchBar from './SearchBar';
import SearchSuggestions from './SearchSuggestions';
import { bgUrl } from '../utils/constants';

const Search = () => {
    return (
        <div className='bg-black overflow-y-scroll custom-scrollbar h-screen relative'>
            <img    src={bgUrl} 
                    className='fixed inset-0 w-full h-full object-cover opacity-30 z-1'
                    alt='bg'
            />
            <div className='relative w-full z-2'>
                <SearchBar/>
                <SearchSuggestions/>
            </div>            
        </div>
    );
};

export default Search;