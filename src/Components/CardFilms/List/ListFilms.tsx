import React, { useEffect } from "react";
import "./ListFilms.css";
import { CardFilm } from "../CardFilm/CardFilm";
import { useSelector } from "react-redux";
import { REDUX_INTERFACE } from "../../../interface";
import { MAX_FILM_PAGE } from "../../../const";

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
      "currentFilms",
      JSON.stringify(currentFilms)
    );
  }, [currentFilms]);

  return (
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
  );
}

export { ListFilms };
