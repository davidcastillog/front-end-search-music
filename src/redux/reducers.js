import { createSlice } from "@reduxjs/toolkit";

const songState = [];
const songsSlice = createSlice({
  name: "songs",
  initialState: songState,
  reducers: {
    setSongs: (state, action) => {
      state.push(...action.payload);
      return state;
    },
    clearSongs: (state) => {
      state.splice(0, state.length);
      return state;
    },
  },
});

// Results reducer. Initial State = null. Boolean to indicate if results are available.
const resultsSlice = createSlice({
  name: "results",
  initialState: null,
  reducers: {
    setResults: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setSongs, clearSongs } = songsSlice.actions;
export const { setResults } = resultsSlice.actions;
export const songsReducer = songsSlice.reducer;
export const resultsReducer = resultsSlice.reducer;
