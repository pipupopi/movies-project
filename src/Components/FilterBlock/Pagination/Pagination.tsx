import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  ACTION_NEXT_PAGE,
  ACTION_PREVIOUS_PAGE,
} from "../../../redux/Pages";
import {
  FIRST_PAGE,
  LOCAL_KEY_PAGES,
  MAX_FILM_PAGE,
} from "../../../utils/const";
import { REDUX_INTERFACE } from "../../../utils/interface";
import React from "react";
import "./Pagination.css";

function Pagination() {
  const dispatch = useDispatch();
  const pages = useSelector(
    (state: REDUX_INTERFACE) => state.filmPages.page
  );
  const currentFilms = useSelector(
    (state: REDUX_INTERFACE) => state.currentFilms.films
  );

  const LAST_PAGE = Math.ceil(currentFilms.length / MAX_FILM_PAGE);

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY_PAGES, JSON.stringify(pages));
  }, [pages]);

  return (
    <div className="pagination_wrapper">
      {pages === FIRST_PAGE ? (
        <img
          src="/icons/arrowLeft.svg"
          className="pagination_btn-disabled"
        />
      ) : (
        <img
          src="/icons/arrowLeft.svg"
          className="pagination_btn"
          onClick={() => dispatch(ACTION_PREVIOUS_PAGE())}
        />
      )}
      <div className="number_page">{pages + " из " + LAST_PAGE}</div>
      {pages === LAST_PAGE ? (
        <img
          src="/icons/arrowRight.svg"
          className="pagination_btn-disabled"
        />
      ) : (
        <img
          src="/icons/arrowRight.svg"
          className="pagination_btn"
          onClick={() => dispatch(ACTION_NEXT_PAGE())}
        />
      )}
    </div>
  );
}

export { Pagination };
