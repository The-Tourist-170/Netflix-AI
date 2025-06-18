import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
    name: "menu",
    initialState: {
        menuView: false,
        searchBtn: true
    },
    reducers: {
        toggleMenuView: (state) => {
            state.menuView = !state.menuView;
            state.searchBtn = !state.searchBtn;
        }
    }
})

export const { toggleMenuView } = menuSlice.actions;
export default menuSlice.reducer;