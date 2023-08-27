import { configureStore } from "@reduxjs/toolkit";
import { pageSlice } from "./pages";
import { filmsSlice } from "./list_films";
import { genresSlice } from "./genres";
import { isLoginSlice } from "./is_login";
import { detailsSlice } from "./details_film";

export const store = configureStore({
  reducer: {
    filmPages: pageSlice.reducer,
    currentFilms: filmsSlice.reducer,
    genres: genresSlice.reducer,
    isLogin: isLoginSlice.reducer,
    savedFilms: filmsSlice.reducer,
    favoriteFilms: filmsSlice.reducer,
    detailsFilm: detailsSlice.reducer,
    pageSearch: pageSlice.reducer,
    searchFilms: filmsSlice.reducer,
  },
});
