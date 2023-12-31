import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ACTION_ADD_DETAILS_FILM } from "../../../redux/DetailsFilm";
import {
  ACTION_ADD_FAVORITE_FILM,
  ACTION_ADD_SAVED_FILM,
  ACTION_REMOVE_FAVORITE_FILM,
  ACTION_REMOVE_SAVED_FILM,
} from "../../../redux/ListFilm";
import {
  CARD_FILM,
  FILMS_INTERFACE,
  REDUX_INTERFACE,
} from "../../../utils/interface";
import { LIST_FILMS } from "../../../utils/listFilms";
import "./CardFilm.css";
import { AnyAction } from "redux";
import { LOCAL_KEY_FAVORITE, LOCAL_KEY_SAVED } from "../../../utils/const";
import React from "react";

function CardFilm({ vote, title, src }: CARD_FILM) {
  const img = `https://image.tmdb.org/t/p/w500/${src}`;
  const dispatch = useDispatch();
  const isLogin = useSelector(
    (state: REDUX_INTERFACE) => state.isLogin.login
  );
  const favoriteFilm = useSelector(
    (state: REDUX_INTERFACE) => state.favoriteFilms.favoriteFilms
  );
  const savedFilm = useSelector(
    (state: REDUX_INTERFACE) => state.savedFilms.savedFilms
  );
  const film = LIST_FILMS.find((item) => item.title === title);

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY_SAVED, JSON.stringify(savedFilm));
  }, [savedFilm]);

  useEffect(() => {
    localStorage.setItem(
      LOCAL_KEY_FAVORITE,
      JSON.stringify(favoriteFilm)
    );
  }, [favoriteFilm]);

  function addFilm(actionAdd: (arg0: unknown) => AnyAction) {
    dispatch(actionAdd(film));
  }

  function removeFilm(
    name: string,
    actionRemove: (arg0: string) => AnyAction
  ) {
    dispatch(actionRemove(name));
  }

  let saved;
  let favorite;

  savedFilm.forEach((element: FILMS_INTERFACE) => {
    if (element.title === title) {
      saved = element;
    }
  });

  favoriteFilm.forEach((element: FILMS_INTERFACE) => {
    if (element.title === title) {
      favorite = element;
    }
  });

  function getDetilsFilm(film: unknown) {
    dispatch(ACTION_ADD_DETAILS_FILM(film));
    localStorage.setItem("details_film", JSON.stringify(film));
  }

  return (
    <div className="wrapperCard">
      <div className="halfs">
        <Link to={`/details_film/${film?.id}`}>
          <div
            className="img_container"
            onClick={() => getDetilsFilm(film)}
          >
            <img
              className="img"
              src={img}
              onClick={() => getDetilsFilm(film)}
            />
          </div>
        </Link>

        <div className="right">
          <div className="header_card">
            <div>Рейтинг {vote}</div>
            <div className="icons_card">
              {isLogin ? (
                <>
                  {saved ? (
                    <img
                      className="btn_favorit"
                      src="./icons/savedMovie.svg"
                      onClick={() =>
                        removeFilm(title, ACTION_REMOVE_SAVED_FILM)
                      }
                    ></img>
                  ) : (
                    <img
                      className="btn_favorit"
                      src="./icons/saveMovie.svg"
                      onClick={() => addFilm(ACTION_ADD_SAVED_FILM)}
                    ></img>
                  )}
                  {favorite ? (
                    <img
                      className="btn_favorit"
                      src="./icons/likedMovie.svg"
                      onClick={() =>
                        removeFilm(title, ACTION_REMOVE_FAVORITE_FILM)
                      }
                    ></img>
                  ) : (
                    <img
                      className="btn_star"
                      src="./icons/likeMovie.svg"
                      onClick={() =>
                        addFilm(ACTION_ADD_FAVORITE_FILM)
                      }
                    ></img>
                  )}
                </>
              ) : (
                <Link to={"/authorization"}>
                  <div className="icons_card">
                    <img
                      className="btn_favorit"
                      src="./icons/saveMovie.svg"
                    ></img>
                    <img
                      className="btn_star"
                      src="./icons/likeMovie.svg"
                    ></img>
                  </div>
                </Link>
              )}
            </div>
          </div>

          <Link to={`/details_film/${film?.id}`} className="link">
            <div
              className="name_card"
              onClick={() => getDetilsFilm(film)}
            >
              {title}
            </div>
            <div
              className="link_details"
              onClick={() => getDetilsFilm(film)}
            >
              <div
                className="button_info"
                onClick={() => getDetilsFilm(film)}
              >
                Подробнее
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export { CardFilm };

