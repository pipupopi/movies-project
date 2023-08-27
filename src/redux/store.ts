import { configureStore } from "@reduxjs/toolkit";
import { pageSlice } from "./Pages";
import { filmsSlice } from "./ListFilm";
import { genresSlice } from "./Genres";
import { isLoginSlice } from "./isLogin";
import { detailsSlice } from "./DetailsFilm";

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
