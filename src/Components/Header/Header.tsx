import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.css";
import { REDUX_INTERFACE } from "../../interface";
import { LOCAL_KEY_ISLOGIN } from "../../const";
import { ACTION_ADD_CURRENT_FILMS } from "../../redux/list_films";
import { ACTION_LOGOUT } from "../../redux/is_login";
import { LIST_FILMS } from "../../listFilms";

function Header() {
  const checkUser = useSelector(
    (state: REDUX_INTERFACE) => state.isLogin.login
  );
  const dispatch = useDispatch();

  return (
    <header className="header">
      <Link to={"/"}>
        <button className="btn_home">Домой</button>
      </Link>
      {checkUser ? (
        <button
          className="btn_login"
          onClick={() => {
            dispatch(ACTION_ADD_CURRENT_FILMS(LIST_FILMS));
            localStorage.removeItem(LOCAL_KEY_ISLOGIN);
            dispatch(ACTION_LOGOUT());
          }}
        >
          Выйти
        </button>
      ) : (
        <Link to={"/authorization"}>
          <button className="btn_login">Войти</button>
        </Link>
      )}
    </header>
  );
}

export { Header };
