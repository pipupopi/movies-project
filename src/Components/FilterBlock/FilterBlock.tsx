import React, { useEffect, useState } from "react";
import { Genres } from "./Genres/Genres";
import "./FilterBlock.css";
import { ReleaseYear } from "./ReleaseYear/ReleaseYear";
import { SelectFilter } from "./Selector/Selector";
import { Pagination } from "./Pagination/Pagination";
import {
  RATTINGS_VALUES,
  SELECTED_DEFAULT,
  SELECTED_FAVORITE,
  SELECTED_SAVED,
  YEARS,
} from "../../const";
import { useDispatch, useSelector } from "react-redux";
import { defaultFilterFilms } from "../../filter_films";
import { ACTION_ADD_CURRENT_FILMS } from "../../redux/list_films";
import { ACTION_REMOVE_PAGE } from "../../redux/pages";
import { ACTION_RESET_GENRES } from "../../redux/genres";
import { LogInSelect } from "../login_select/select_list";
import { LIST_FILMS } from "../../listFilms";
import { REDUX_INTERFACE } from "../../interface";
import { Link } from "react-router-dom";

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
    dispatch(ACTION_RESET_GENRES());
    dispatch(
      ACTION_ADD_CURRENT_FILMS(defaultFilterFilms(selectFilms))
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
