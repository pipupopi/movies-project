import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ACTION_RESET_GENRES } from "../../redux/genres";
import { ACTION_ADD_CURRENT_FILMS } from "../../redux/ListFilm";
import { ACTION_REMOVE_PAGE } from "../../redux/Pages";
import {
  RATTINGS_VALUES,
  SELECTED_DEFAULT,
  SELECTED_FAVORITE,
  SELECTED_SAVED,
  YEARS,
} from "../../utils/const";
import { defaultFilterFilms } from "../../utils/filtersFilms";
import { REDUX_INTERFACE } from "../../utils/interface";
import { LIST_FILMS } from "../../utils/listFilms";
import { LogInSelect } from "../ListSelect/ListSelect";
import "./FilterBlock.css";
import { Genres } from "./Genres/Genres";
import { ReleaseYear } from "./ReleaseYear/ReleaseYear";
import { SelectFilter } from "./Selector/Selector";
import React from "react";

function FilterBlock() {
  const dispatch = useDispatch();
  const [selectRatting, setSelectRatting] = useState(
    RATTINGS_VALUES.POPULAR_DOWN
  );
  const [selectYear, setSelectYear] = useState(YEARS[2020]);
  const [selectFilms, setSelectFilms] = useState(LIST_FILMS);
  const [selectedList, setSelectedList] = useState(SELECTED_DEFAULT);
  const saved = useSelector(
    (state: REDUX_INTERFACE) => state.savedFilms.savedFilms
  );
  const favorites = useSelector(
    (state: REDUX_INTERFACE) => state.favoriteFilms.favoriteFilms
  );
  const films = useSelector(
    (state: REDUX_INTERFACE) => state.currentFilms.films
  );

  useEffect(() => {
    if (selectedList === SELECTED_SAVED) {
      dispatch(ACTION_ADD_CURRENT_FILMS(saved));
    }
  }, [saved]);

  useEffect(() => {
    if (selectedList === SELECTED_FAVORITE) {
      dispatch(ACTION_ADD_CURRENT_FILMS(favorites));
    }
  }, [favorites]);

  function resetFilter() {
    setSelectRatting(RATTINGS_VALUES.POPULAR_DOWN);
    setSelectYear(YEARS[2020]);
    setSelectFilms(LIST_FILMS);
    dispatch(ACTION_RESET_GENRES());
    dispatch(
      ACTION_ADD_CURRENT_FILMS(defaultFilterFilms(LIST_FILMS))
    );
    dispatch(ACTION_REMOVE_PAGE());
  }

  return (
    <div className="filter_wrapper">
      <div className="filter_header">Фильтры:</div>
      <Link to={"/search"}>
        <button className="filter_reset">Найти любимый фильм</button>
      </Link>
      <button className="filter_reset" onClick={resetFilter}>
        Сбросить все фильтры
      </button>

      <div className="">Сортировать по:</div>
      <LogInSelect
        selectLogIn={setSelectFilms}
        selectRatting={selectRatting}
        selectYear={selectYear}
        selectList={setSelectedList}
      />
      <SelectFilter
        setSelectRatting={setSelectRatting}
        selectRatting={selectRatting}
        selectYear={selectYear}
        selectFilms={selectFilms}
      />

      <div>Год релиза:</div>
      <ReleaseYear
        selectYear={selectYear}
        setSelectYear={setSelectYear}
        selectRatting={selectRatting}
        selectFilms={selectFilms}
      />
      <Genres
        selectYear={selectYear}
        selectRatting={selectRatting}
        selectFilms={selectFilms}
      />
    </div>
  );
}

export { FilterBlock };
