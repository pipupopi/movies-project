import "./Pagination.css";
import React, { useEffect } from "react";
import { REDUX_INTERFACE } from "../../../interface";
import { useSelector, useDispatch } from "react-redux";
import {
  MAX_FILM_PAGE,
  FIRST_PAGE,
  LOCAL_KEY_PAGES,
} from "../../../const";
import {
  ACTION_NEXT_PAGE,
  ACTION_PREVIOUS_PAGE,
} from "../../../redux/pages";

function Pagination() {
  const pages = useSelector(
    (state: REDUX_INTERFACE) => state.filmPages.page
  );
  const currentFilms = useSelector(
    (state: REDUX_INTERFACE) => state.currentFilms.films
  );

  console.log(pages);

  const dispatch = useDispatch();
  const LAST_PAGE = Math.ceil(currentFilms.length / MAX_FILM_PAGE);

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY_PAGES, JSON.stringify(pages));
  }, [pages]);

  function prevPage() {
    dispatch(ACTION_PREVIOUS_PAGE());
  }

  function nextPage() {
    dispatch(ACTION_NEXT_PAGE());
  }

  return (
    <div className="pagination_wrapper">
      {pages === FIRST_PAGE ? (
        <img src="/icons/arrowLeft.svg" className="pagination_btn" />
      ) : (
        <img
          src="/icons/arrowLeft.svg"
          className="pagination_btn"
          onClick={() => prevPage()}
        />
      )}
      <div className="number_page">{pages + " из " + LAST_PAGE}</div>
      {pages === LAST_PAGE ? (
        <img src="/icons/arrowRight.svg" className="pagination_btn" />
      ) : (
        <img
          src="/icons/arrowRight.svg"
          className="pagination_btn"
          onClick={() => nextPage()}
        />
      )}
    </div>
  );
}

export { Pagination };
