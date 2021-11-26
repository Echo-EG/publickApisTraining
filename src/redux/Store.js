import {configureStore} from "@reduxjs/toolkit";
import imdbReducer from "./Slice";


export const store = configureStore({
    reducer:{
        imdbState: imdbReducer
    }
})