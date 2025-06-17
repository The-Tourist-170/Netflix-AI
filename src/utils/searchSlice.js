import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        searchView: false,
    },
    reducers: {
        toggleSearchView: (state) => {
            state.searchView = !state.searchView;
        }
    }
})

export const { toggleSearchView } = searchSlice.actions;
export default searchSlice.reducer;