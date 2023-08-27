import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./InitialState";
import { FILMS_INTERFACE } from "../utils/interface";

export const filmsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    ACTION_ADD_CURRENT_FILMS: (state, action) => {
      state.films = action.payload;
    },
    ACTION_ADD_FAVORITE_FILM: (state, action) => {
      state.favoriteFilms.push(action.payload);
    },
    ACTION_REMOVE_FAVORITE_FILM: (state, action) => {
      state.favoriteFilms = state.favoriteFilms.filter(
        (item: FILMS_INTERFACE) => item.title !== action.payload
      );
    },
    ACTION_ADD_SAVED_FILM: (state, action) => {
      state.savedFilms.push(action.payload);
    },
    ACTION_REMOVE_SAVED_FILM: (state, action) => {
      state.savedFilms = state.savedFilms.filter(
        (item: FILMS_INTERFACE) => item.title !== action.payload
      );
    },
    ACTION_ADD_CURRENT_SEARCH_FILM: (state, action) => {
      state.searchFilms = action.payload;
    },
  },
});

export const {
  ACTION_ADD_CURRENT_FILMS,
  ACTION_ADD_FAVORITE_FILM,
  ACTION_REMOVE_FAVORITE_FILM,
  ACTION_ADD_SAVED_FILM,
  ACTION_REMOVE_SAVED_FILM,
  ACTION_ADD_CURRENT_SEARCH_FILM,
} = filmsSlice.actions;
