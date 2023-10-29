import { createSlice } from "@reduxjs/toolkit";

// collection of logic
export const counterSlice = createSlice({
    name: "counter",
    initialState: {count: 0},
    reducers: {
        increment: (state)=> {
            state.count = state.count + 1
        },
        decrement: (state) =>{
            state.count = state.count - 1
        },
        reset: (state) =>{
            state.count = 0
        },
        incrementbyfive: (state, actions) => {
            state.count = state.count + actions.payload
        }

    }
});
export const {increment, decrement, reset, incrementbyfive} = counterSlice.actions;

export default counterSlice.reducer;