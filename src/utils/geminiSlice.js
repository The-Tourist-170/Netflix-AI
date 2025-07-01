import { createSlice } from "@reduxjs/toolkit";

const geminiSlice = createSlice({
    name: 'gemini',
    initialState: {
        movieNames: null,
        movieResults: null
    },
    reducers: {
        addGeminiMovies: (state, action) => {
            const {movieNames, movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        }
    }
});

export const { addGeminiMovies } = geminiSlice.actions;
export default geminiSlice.reducer;