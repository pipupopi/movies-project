import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  LOCAL_GET_CURRENT_FILMS,
  MAX_FILM_PAGE,
} from "../../../utils/const";
import { REDUX_INTERFACE } from "../../../utils/interface";
import { CardFilm } from "../CardFilm/CardFilm";
import React from "react";
import "./ListFilms.css";
import { Pagination } from "../../FilterBlock/Pagination/Pagination";

function ListFilms() {
  const page = useSelector(
    (state: REDUX_INTERFACE) => state.filmPages.page
  );
  const films = useSelector(
    (state: REDUX_INTERFACE) => state.currentFilms.films
  );

  const lastFilmIndex = page * MAX_FILM_PAGE;
  const firstFilmIndex = lastFilmIndex - MAX_FILM_PAGE;
  const currentFilms = films.slice(firstFilmIndex, lastFilmIndex);

  useEffect(() => {
    localStorage.setItem(
      LOCAL_GET_CURRENT_FILMS,
      JSON.stringify(currentFilms)
    );
  }, [currentFilms]);

  return (
    <div className="grid_block">
      <div className="grid_wrapper">
        {currentFilms.map((item) => (
          <CardFilm
            vote={item.vote_average}
            title={item.title}
            key={item.id}
            src={item.poster_path}
          />
        ))}
      </div>
      <div className="pagination_block">
        {films.length ? <Pagination /> : null}
      </div>
    </div>
  );
}

export { ListFilms };
