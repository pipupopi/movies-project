import React from "react";
import { nanoid } from "nanoid";
import { YEAR_LIST } from "../../../const";
import { useDispatch, useSelector } from "react-redux";
import { ACTION_ADD_CURRENT_FILMS } from "../../../redux/list_films";
import { ACTION_REMOVE_PAGE } from "../../../redux/pages";
import { mainFilterFilms } from "../../../filter_films";
import {
  REDUX_INTERFACE,
  SELECT_YEAR_INTERFACE,
} from "../../../interface";

function ReleaseYear({
  selectYear,
  setSelectYear,
  selectRatting,
  selectFilms,
}: SELECT_YEAR_INTERFACE) {
  const dispatch = useDispatch();
  const genres = useSelector(
    (state: REDUX_INTERFACE) => state.genres.genres
  );

  function filterByYear(year: string) {
    dispatch(
      ACTION_ADD_CURRENT_FILMS(
        mainFilterFilms(selectRatting, year, selectFilms, genres)
      )
    );
  }
  return (
    <select
      className="filter_selector"
      value={selectYear}
      onChange={(event) => {
        filterByYear(event.target.value);
        setSelectYear(event.target.value);
        dispatch(ACTION_REMOVE_PAGE());
      }}
    >
      {YEAR_LIST.map((item) => (
        <option key={nanoid()}>{item}</option>
      ))}
    </select>
  );
}

export { ReleaseYear };
