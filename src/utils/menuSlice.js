import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
    name: "menu",
    initialState: {
        menuView: false,
    },
    reducers: {
        toggleMenuView: (state) => {
            state.menuView = !state.menuView;
        }
    }
})

export const { toggleMenuView } = menuSlice.actions;
export default menuSlice.reducer;