import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  REDUX_INTERFACE,
  SELECT_LOGIN_INTERFACE,
} from "../../interface";
import { LIST_FILMS } from "../../listFilms";
import { ACTION_ADD_CURRENT_FILMS } from "../../redux/list_films";
import { ACTION_REMOVE_PAGE } from "../../redux/pages";
import { mainFilterFilms } from "../../filter_films";

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
    if (value === "Смотреть позже") {
      selectLogIn(savedFilms);
      return savedFilms;
    } else if (value === "Избранные") {
      selectLogIn(favoriteFilms);
      return favoriteFilms;
    } else {
      selectLogIn(LIST_FILMS);
      return LIST_FILMS;
    }
  }

  return (
    <div>
      {isLogin ? (
        <select
          className="filter_selector"
          onChange={(event) => {
            selectList(event.target.value);
            setSelectValue(event.target.value);
            dispatch(ACTION_REMOVE_PAGE());
            dispatch(
              ACTION_ADD_CURRENT_FILMS(
                mainFilterFilms(
                  selectRatting,
                  selectYear,
                  setSelectValue(event.target.value),
                  genres
                )
              )
            );
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
