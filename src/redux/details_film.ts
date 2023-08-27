import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initial_state";

export const detailsSlice = createSlice({
  name: "detailsFilm",
  initialState,
  reducers: {
    ACTION_ADD_DETAILS_FILM: (state, action) => {
      state.detailsFilm = action.payload;
    },
  },
});

export const { ACTION_ADD_DETAILS_FILM } = detailsSlice.actions;
