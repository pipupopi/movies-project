import { INITIAL_STATE_INTERFACE } from "../interface";
import { LIST_FILMS } from "../listFilms";
import {
  LOCAL_GET_SAVED,
  LOCAL_GET_FAVORITE,
  LOCAL_GET_ISLOGIN,
  LOCAL_GET_DETAILS_FILM,
  FIRST_PAGE,
  DEFAULT_FILMS_SEARCH,
  LOCAL_GET_SEARCH_FILMS,
  LOCAL_GET_PAGES,
} from "../const";

export const initialState: INITIAL_STATE_INTERFACE = {
  page: JSON.parse(LOCAL_GET_PAGES) || 1,
  pageSearch: FIRST_PAGE,
  films: LIST_FILMS,
  genres: [],
  login: LOCAL_GET_ISLOGIN || false,
  favoriteFilms: JSON.parse(LOCAL_GET_FAVORITE) || [],
  savedFilms: JSON.parse(LOCAL_GET_SAVED) || [],
  detailsFilm: JSON.parse(LOCAL_GET_DETAILS_FILM) || [],
  searchFilms:
    JSON.parse(LOCAL_GET_SEARCH_FILMS) || DEFAULT_FILMS_SEARCH,
};
