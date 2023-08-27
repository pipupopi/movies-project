import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ACTION_ADD_DETAILS_FILM } from "../../redux/DetailsFilm";
import { ACTION_ADD_CURRENT_SEARCH_FILM } from "../../redux/ListFilm";
import { ACTION_NEXT_PAGE_SEARCH } from "../../redux/Pages";
import {
  GENRES_LIST,
  LOCAL_KEY_SEARCH_FILM,
  MAX_FILM_FIND,
  NOT_FOUND_FILM,
} from "../../utils/const";
import { findFilterFilm } from "../../utils/filtersFilms";
import {
  FILMS_INTERFACE,
  REDUX_INTERFACE,
} from "../../utils/interface";
import { Header } from "../Header/Header";
import React from "react";
import "./SearchPage.css";

function Search() {
  const [popularity, setPopularity] = useState<string>("Популярный");
  const [vote, setVote] = useState<string>("Высокая оценка");
  const [genre, setGenre] = useState<string>("боевик");
  const page = useSelector(
    (state: REDUX_INTERFACE) => state.pageSearch.pageSearch
  );
  const currentSearchFilms = useSelector(
    (state: REDUX_INTERFACE) => state.searchFilms.searchFilms
  );
  const dispatch = useDispatch();

  const lastFilmIndex = page * MAX_FILM_FIND;
  const firstFilmIndex = lastFilmIndex - MAX_FILM_FIND;
  const currentFilm = currentSearchFilms.slice(
    firstFilmIndex,
    lastFilmIndex
  );

  useEffect(() => {
    localStorage.setItem(
      LOCAL_KEY_SEARCH_FILM,
      JSON.stringify(currentSearchFilms)
    );
  }, [currentSearchFilms]);

  function findFilm() {
    dispatch(
      ACTION_ADD_CURRENT_SEARCH_FILM(
        findFilterFilm(popularity, vote, genre)
      )
    );
  }

  return (
    <div className="app">
      <Header />
      <div className="wrapper">
        <div className="filter-block">
          <h2>
            Выбрать фильм по <br></br> любимым категориям:
          </h2>
          <div className="select-block">
            <p>Оценка:</p>
            <select onChange={(event) => setVote(event.target.value)}>
              <option>Высокая оценка</option>
              <option>Низкая оценка</option>
            </select>
            <div className="popularity">
              <p>Популярность:</p>
              <select
                onChange={(event) =>
                  setPopularity(event.target.value)
                }
              >
                <option>Популярный</option>
                <option>Неизвестный</option>
              </select>
            </div>
            <div className="genres">
              <p>Жанр:</p>
              <select
                onChange={(event) => setGenre(event.target.value)}
              >
                {GENRES_LIST.map((item) => (
                  <option key={item.id}>{item.name}</option>
                ))}
              </select>
            </div>
          </div>
          <button className="find-btn" onClick={findFilm}>
            Найти
          </button>
          {currentFilm.length === NOT_FOUND_FILM ? (
            <>
              <div className="pagination-btn-no-film">
                <button disabled>Подходит</button>
                <button disabled>Не подходит</button>
              </div>
              <div className="film">
                <div className="film-card">
                  <img
                    className="film-img"
                    src="/icons/noFilm.svg"
                  ></img>
                  <p className="error-title">
                    Не нашлось такого фильма
                  </p>
                </div>
              </div>
            </>
          ) : null}
          {currentFilm.map((item: FILMS_INTERFACE) => (
            <div key={item.id}>
              <div>
                <div className="pagination-btn">
                  <Link to={`/details_film/${item.id}`}>
                    <button
                      onClick={() => {
                        dispatch(ACTION_ADD_DETAILS_FILM(item));
                      }}
                    >
                      Подходит
                    </button>
                  </Link>
                  {page === currentSearchFilms.length ? (
                    <button style={{ backgroundColor: "grey" }}>
                      Не подходит
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        dispatch(ACTION_NEXT_PAGE_SEARCH());
                      }}
                    >
                      Не подходит
                    </button>
                  )}
                </div>
              </div>
              <div className="film">
                <div className="film-card">
                  <img
                    className="film-img"
                    src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  ></img>
                  <p className="search_film-title">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export { Search };
