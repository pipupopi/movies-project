import { useDispatch, useSelector } from "react-redux";
import { ACTION_ADD_CURRENT_FILMS } from "../../redux/ListFilm";
import { ACTION_REMOVE_PAGE } from "../../redux/Pages";
import { SELECTED_FAVORITE, SELECTED_SAVED } from "../../utils/const";
import { mainFilterFilms } from "../../utils/filtersFilms";
import {
  REDUX_INTERFACE,
  SELECT_LOGIN_INTERFACE,
} from "../../utils/interface";
import { LIST_FILMS } from "../../utils/listFilms";
import React from "react";

function LogInSelect({
  selectLogIn,
  selectRatting,
  selectYear,
  selectList,
}: SELECT_LOGIN_INTERFACE) {
  const dispatch = useDispatch();
  const isLogin = useSelector(
    (state: REDUX_INTERFACE) => state.isLogin.login
  );
  const genres = useSelector(
    (state: REDUX_INTERFACE) => state.genres.genres
  );
  const savedFilms = useSelector(
    (state: REDUX_INTERFACE) => state.savedFilms.savedFilms
  );
  const favoriteFilms = useSelector(
    (state: REDUX_INTERFACE) => state.favoriteFilms.favoriteFilms
  );

  function setSelectValue(value: string) {
    switch (value) {
      case SELECTED_SAVED:
        selectLogIn(savedFilms);
        return savedFilms;
      case SELECTED_FAVORITE:
        selectLogIn(favoriteFilms);
        return favoriteFilms;
        break;
      default:
        selectLogIn(LIST_FILMS);
        return LIST_FILMS;
    }
  }

  function setFilterParams(value: string) {
    selectList(value);
    setSelectValue(value);
    dispatch(ACTION_REMOVE_PAGE());
    dispatch(
      ACTION_ADD_CURRENT_FILMS(
        mainFilterFilms(
          selectRatting,
          selectYear,
          setSelectValue(value),
          genres
        )
      )
    );
  }

  return (
    <div>
      {isLogin ? (
        <select
          className="filter_selector"
          onChange={(event) => {
            setFilterParams(event.target.value);
          }}
        >
          <option>Весь список</option>
          <option>Избранные</option>
          <option>Смотреть позже</option>
        </select>
      ) : null}
    </div>
  );
}

export { LogInSelect };
