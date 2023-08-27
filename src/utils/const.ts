import { findFilterFilm } from "./filtersFilms";

export const GENRES_LIST = [
  {
    id: 28,
    name: "боевик",
  },
  {
    id: 12,
    name: "приключения",
  },
  {
    id: 16,
    name: "мультфильм",
  },
  {
    id: 35,
    name: "комедия",
  },
  {
    id: 80,
    name: "криминал",
  },
  {
    id: 99,
    name: "документальный",
  },
  {
    id: 18,
    name: "драма",
  },
  {
    id: 10751,
    name: "семейный",
  },
  {
    id: 14,
    name: "фэнтези",
  },
  {
    id: 36,
    name: "история",
  },
  {
    id: 27,
    name: "ужасы",
  },
  {
    id: 10402,
    name: "музыка",
  },
  {
    id: 9648,
    name: "детектив",
  },
  {
    id: 10749,
    name: "мелодрама",
  },
  {
    id: 878,
    name: "фантастика",
  },
  {
    id: 10770,
    name: "телевизионный фильм",
  },
  {
    id: 53,
    name: "триллер",
  },
  {
    id: 10752,
    name: "военный",
  },
];

export const YEAR_LIST = [2017, 2018, 2019, 2020];

export const FILTER_LIST = [
  "Популярные по убыванию",
  "Рейтинг по убыванию",
  "Популярные по возрастанию",
  "Рейтинг по возрастанию",
];

export const MAX_FILM_PAGE = 6;
export const FIRST_PAGE = 1;
export const PAGINATION_VALUE = 1;

export const RATTING_INCREASE = "INCREASE";
export const RATTING_DESCENDING = "DESCENDING";

export const RATTINGS_VALUES = {
  POPULAR_DOWN: "Популярные по убыванию",
  RATING_DOWN: "Рейтинг по убыванию",
  POPULAR_UP: "Популярные по возрастанию",
  RATING_UP: "Рейтинг по возрастанию",
};

export const YEARS = {
  "2017": "2017",
  "2018": "2018",
  "2019": "2019",
  "2020": "2020",
};

export const DEFAULT_PASSWORD = "123";
export const DEFAULT_LOGIN = "123";

export const LOCAL_GET_ISLOGIN = localStorage.getItem(
  "isLogin"
) as string;
export const LOCAL_KEY_ISLOGIN = "isLogin";
export const LOCAL_KEY_FAVORITE = "favoriteFilm";
export const LOCAL_KEY_SAVED = "savedFilm";
export const LOCAL_KEY_SEARCH_FILM = "search_films";
export const LOCAL_KEY_PAGES = "pages";
export const LOCAL_KEY_CURRENT_FILMS = "currentFilms";

export const LOCAL_GET_FAVORITE = localStorage.getItem(
  "favoriteFilm"
) as string;
export const LOCAL_GET_SAVED = localStorage.getItem(
  "savedFilm"
) as string;
export const LOCAL_GET_DETAILS_FILM = localStorage.getItem(
  "details_film"
) as string;
export const LOCAL_GET_SEARCH_FILMS = localStorage.getItem(
  "search_films"
) as string;
export const LOCAL_GET_PAGES = localStorage.getItem(
  "pages"
) as string;
export const LOCAL_GET_CURRENT_FILMS = localStorage.getItem(
  "currentFilms"
) as string;

export const SELECTED_SAVED = "Смотреть позже";
export const SELECTED_FAVORITE = "Избранные";
export const SELECTED_DEFAULT = "Список фильмов";

export const POPULARITY = {
  HIGH: "Популярный",
  LOW: "Неизвестный",
};

export const VOTE = {
  HIGH: "Высокая оценка",
  LOW: "Низкая оценка",
};

export const MAX_FILM_FIND = 1;
export const DEFAULT_FILMS_SEARCH = findFilterFilm(
  POPULARITY.HIGH,
  VOTE.HIGH,
  "боевик"
);

export const NOT_FOUND_FILM = 0;
export const CHECK_AGE_ADULT = "ADULT";
export const CHECK_AGE_UNDERAGE = "UNDERAGE";
export const RELEASE_FORMAT = "qq.MM.u";
