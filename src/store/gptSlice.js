import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    suggestions: null,
    tmdbMovieResult: null,
    isLoading: false,
  },
  reducers: {
    addSuggestions: (state, action) => {
      state.suggestions = action.payload;
    },
    addTmdbMovieResult: (state, action) => {
      state.tmdbMovieResult = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { addSuggestions, addTmdbMovieResult, setLoading } =
  gptSlice.actions;
export default gptSlice.reducer;
