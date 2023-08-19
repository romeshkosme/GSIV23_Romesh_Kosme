import { configureStore } from '@reduxjs/toolkit'
import movieReducer from "./movies/slice";
import configurationReducer from "./configuration/slice";

// Automatically adds the thunk middleware and the Redux DevTools extension
const store = configureStore({
  // Automatically calls `combineReducers`
  reducer: {
    movies: movieReducer,
    configuration: configurationReducer
  }
})

export default store;