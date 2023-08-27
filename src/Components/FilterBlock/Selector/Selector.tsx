import React from "react";
import { FILTER_LIST } from "../../../utils/const";
import { nanoid } from "nanoid";
import { mainFilterFilms } from "../../../utils/filtersFilms";
import { useDispatch, useSelector } from "react-redux";
import { ACTION_ADD_CURRENT_FILMS } from "../../../redux/ListFilm";
import { ACTION_REMOVE_PAGE } from "../../../redux/Pages";
import {
  REDUX_INTERFACE,
  SELECT_RATTING_INTERFACE,
} from "../../../utils/interface";

function SelectFilter({
  setSelectRatting,
  selectRatting,
  selectYear,
  selectFilms,
}: SELECT_RATTING_INTERFACE) {
  const dispatch = useDispatch();
  const genres = useSelector(
    (state: REDUX_INTERFACE) => state.genres.genres
  );

  function filterByRatting(ratting: string) {
    dispatch(
      ACTION_ADD_CURRENT_FILMS(
        mainFilterFilms(ratting, selectYear, selectFilms, genres)
      )
    );
  }

  return (
    <select
      className="filter_selector"
      onChange={(event) => {
        filterByRatting(event.target.value);
        setSelectRatting(event.target.value);
        dispatch(ACTION_REMOVE_PAGE());
      }}
      value={selectRatting}
    >
      {FILTER_LIST.map((item) => (
        <option key={nanoid()}>{item}</option>
      ))}
    </select>
  );
}

export { SelectFilter };
