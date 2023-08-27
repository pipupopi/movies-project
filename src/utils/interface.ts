export interface FILMS_INTERFACE {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface ARRAY_FILMS {
  films: {
    adult: boolean;
    backdrop_path: string | null;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }[];
}

export interface REDUX_FILMS_INTERFACE {
  films: {
    adult: boolean;
    backdrop_path: string | null;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  };
}

export interface SELECT_LOGIN_INTERFACE {
  selectLogIn: React.Dispatch<React.SetStateAction<any>>;
  selectRatting: string;
  selectYear: string;
  selectList: React.Dispatch<React.SetStateAction<string>>;
}

export interface CARD_FILM {
  vote: number;
  title: string;
  key: number;
  src: string | undefined;
}

export interface REDUX_INTERFACE {
  filmPages: { page: number };
  currentFilms: { films: any[] };
  genres: { genres: number[] };
  isLogin: { login: string };
  favoriteFilms: { favoriteFilms: any };
  savedFilms: { savedFilms: any };
  detailsFilm: { detailsFilm: FILMS_INTERFACE };
  pageSearch: { pageSearch: number };
  searchFilms: { searchFilms: FILMS_INTERFACE[] };
  type: string;
  payload: number | ARRAY_FILMS;
}

export interface INITIAL_STATE_INTERFACE {
  page: number;
  films: any[];
  genres: number[];
  login: string | null | boolean;
  favoriteFilms: any;
  savedFilms: any;
  detailsFilm: FILMS_INTERFACE | string;
  pageSearch: number;
  searchFilms: any[];
}

export interface SELECT_RATTING_INTERFACE {
  setSelectRatting: React.Dispatch<React.SetStateAction<string>>;
  selectRatting: string;
  selectYear: string;
  selectFilms: any;
}

export interface GENRES_INTERFACE {
  selectYear: string;
  selectRatting: string;
  selectFilms: any;
}

export interface SELECT_YEAR_INTERFACE {
  selectYear: string;
  setSelectYear: React.Dispatch<React.SetStateAction<string>>;
  selectRatting: string;
  selectFilms: any;
}
