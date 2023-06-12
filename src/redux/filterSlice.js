import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter",
    initialState: '',
    reducers: {
        setFilter(state, action) {
            console.log(state)
            return state = action.payload
        },
    },
})

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;