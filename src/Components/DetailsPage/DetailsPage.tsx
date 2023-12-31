import { format } from "date-fns";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RELEASE_FORMAT } from "../../utils/const";
import { REDUX_INTERFACE } from "../../utils/interface";
import { Header } from "../Header/Header";
import React from "react";
import "./DetailsPage.css";

function DetailsFilm() {
  const film = useSelector(
    (state: REDUX_INTERFACE) => state.detailsFilm.detailsFilm
  );
  const imgFilm = `https://image.tmdb.org/t/p/w500/${film.poster_path}`;
  const posterFilm = `https://image.tmdb.org/t/p/w500/${film.backdrop_path}`;
  const releaseFilm = format(
    new Date(film.release_date),
    RELEASE_FORMAT
  );

  return (
    <div className="app">
      <Header />
      <div
        className="component-wrapper"
        style={{ backgroundImage: `url(${posterFilm})` }}
      >
        <div className="component">
          <div className="posters-film">
            <img
              src={imgFilm}
              alt="Постер фильма"
              className="poster"
            />
          </div>
          <div className="info-film">
            <p className="title-film">{film.title}</p>
            <p>Рейтинг: {film.vote_average}</p>
            <p>Язык оригинала: {film.original_language}</p>
            <p>Дата выхода: {releaseFilm}</p>
            <p>Оригинальное название: {film.original_title}</p>
            <p className="film-overview">{film.overview}</p>
          </div>
          <Link to={"/"}>
            <img className="exit_btn" src="/icons/close.svg"></img>
          </Link>
        </div>
      </div>
    </div>
  );
}

export { DetailsFilm };
