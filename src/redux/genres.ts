import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./InitialState";

export const genresSlice = createSlice({
  name: "genres",
  initialState,
  reducers: {
    ACTION_ADD_GENRES: (state, action) => {
      state.genres.push(action.payload);
    },
    ACTION_REMOVE_GENRES: (state, action) => {
      state.genres = state.genres.filter(
        (item) => item !== action.payload
      );
    },
    ACTION_RESET_GENRES: (state) => {
      state.genres = [];
    },
  },
});

export const {
  ACTION_ADD_GENRES,
  ACTION_REMOVE_GENRES,
  ACTION_RESET_GENRES,
} = genresSlice.actions;
