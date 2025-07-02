import { createSlice } from "@reduxjs/toolkit";

const geminiSlice = createSlice({
    name: 'gemini',
    initialState: {
        movieNames: null,
        movieResults: null,
        loading: false,
    },
    reducers: {
        addGeminiMovies: (state, action) => {
            const {movieNames, movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        },
        clearGeminiSlice: (state) => {
            state.movieNames = null;
            state.movieResults = null;
        },
        setGeminiLoading: (state, action) => {
            state.loading = action.payload;
        }
    }
});

export const { addGeminiMovies, clearGeminiSlice, setGeminiLoading } = geminiSlice.actions;
export default geminiSlice.reducer;