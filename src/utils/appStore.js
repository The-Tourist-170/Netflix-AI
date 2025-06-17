import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import searchReducer from "./searchSlice";
import menuReducer from "./menuSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        search: searchReducer,
        menu: menuReducer
    }
});

export default appStore;