import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import searchReducer from "./searchSlice";
import menuReducer from "./menuSlice";
import geminiReducer from "./geminiSlice"
import muteReducer from "./muteSlice"

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        search: searchReducer,
        menu: menuReducer,
        gemini: geminiReducer,
        mute: muteReducer
    }
});

export default appStore;