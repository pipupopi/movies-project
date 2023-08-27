import React, { useState } from "react";
import {
  DEFAULT_LOGIN,
  DEFAULT_PASSWORD,
  LOCAL_KEY_ISLOGIN,
} from "../../const";
import { Link } from "react-router-dom";
import "./authorization.css";
import { useDispatch } from "react-redux";
import { ACTION_LOGIN } from "../../redux/is_login";

function Authorization() {
  const [login, setLogin] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const dispatch = useDispatch();

  function authorization() {
    if (login === DEFAULT_LOGIN && password === DEFAULT_PASSWORD) {
      setIsLogin(true);
      localStorage.setItem(
        LOCAL_KEY_ISLOGIN,
        JSON.stringify(isLogin)
      );
      dispatch(ACTION_LOGIN());
    } else {
      setIsLogin(false);
    }
  }

  return (
    <div className="blur-div">
      <div className="block-auth">
        <Link to={"/"}>
          <img src="/icons/close.svg" className="close-icon" />
        </Link>
        <p className="title">АВТОРИЗАЦИЯ</p>
        <div className="form">
          <form>
            <p className="text-form">Логин:</p>
            <input
              className="login-input"
              type="text"
              placeholder="Введите логин..."
              onChange={(event) => setLogin(event.target.value)}
            />
            <p className="text-form">Пароль:</p>
            <input
              className="login-input"
              type="text"
              placeholder="Введите пароль..."
              onChange={(event) => setPassword(event.target.value)}
            />
          </form>
        </div>
        <div className="btn-sign-in">
          {isLogin ? (
            <Link to={"/"}>
              <button
                className="btn-log-in"
                onMouseMove={authorization}
              >
                Войти в аккаунт
              </button>
            </Link>
          ) : (
            <button
              className="btn-log-in"
              onMouseMove={authorization}
              style={{ backgroundColor: "grey" }}
            >
              Войти в аккаунт
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export { Authorization };
