import { configureStore } from "@reduxjs/toolkit";
import { songsReducer, resultsReducer } from "./reducers";

const store = configureStore({
  reducer: {
    songs: songsReducer,
    results: resultsReducer,
  },
});

export default store;
