import "./Genres.css";
import React, { useEffect } from "react";
import { GENRES_LIST } from "../../../const";
import { useDispatch, useSelector } from "react-redux";
import {
  GENRES_INTERFACE,
  REDUX_INTERFACE,
} from "../../../interface";
import { ACTION_ADD_CURRENT_FILMS } from "../../../redux/list_films";
import {
  ACTION_ADD_GENRES,
  ACTION_REMOVE_GENRES,
} from "../../../redux/genres";
import { ACTION_REMOVE_PAGE } from "../../../redux/pages";
import { mainFilterFilms } from "../../../filter_films";

function Genres({
  selectYear,
  selectRatting,
  selectFilms,
}: GENRES_INTERFACE) {
  const genres = useSelector(
    (state: REDUX_INTERFACE) => state.genres.genres
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      ACTION_ADD_CURRENT_FILMS(
        mainFilterFilms(
          selectRatting,
          selectYear,
          selectFilms,
          genres
        )
      )
    );
  }, [genres]);

  function filterGenres(
    genresChecked: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) {
    if (genresChecked.target.checked) {
      dispatch(ACTION_ADD_GENRES(id));
    } else {
      dispatch(ACTION_REMOVE_GENRES(id));
    }
  }
  return (
    <div className="genres_container">
      {GENRES_LIST.map((item) => (
        <div
          key={item.id}
          className="genres_wrapper"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            filterGenres(event, item.id);
            dispatch(ACTION_REMOVE_PAGE());
          }}
        >
          <input
            className="genres_check"
            type="checkbox"
            checked={genres.includes(item.id)}
            onChange={() => genres.includes(item.id)}
          ></input>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
}

export { Genres };
