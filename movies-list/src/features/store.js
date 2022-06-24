import { configureStore } from '@reduxjs/toolkit'; // redux store configuration
import moviesReducer from './movies/movieSlice'

export const reduxStore = configureStore({
    reducer: {
        movies: moviesReducer,
    } 
});