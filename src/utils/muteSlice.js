import { createSlice } from "@reduxjs/toolkit";

const muteSlice = createSlice({
    name: "mute",
    initialState: {
        mute: false
    },
    reducers: {
        toggleMute: (state) => {
            state.mute = !state.mute;
        }
    }
})

export const { toggleMute } = muteSlice.actions;
export default muteSlice.reducer;