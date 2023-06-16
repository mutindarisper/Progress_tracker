import { configureStore } from "@reduxjs/toolkit";
import scoreReducer from '../components/scores/scoreSlice.js'



export const store = configureStore({
    reducer:{
        scoreselections:scoreReducer
    }
})