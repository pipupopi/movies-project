import { Outlet } from "react-router-dom";
import { ListFilms } from "./CardFilms/List/ListFilms";
import { FilterBlock } from "./FilterBlock/FilterBlock";
import { Header } from "./Header/Header";
import React from "react";
import "./MainComponent.css";

function MainComponent() {
  return (
    <div className="app">
      <Header />
      <div className="used_space">
        <FilterBlock />
        <ListFilms />
      </div>
      <Outlet />
    </div>
  );
}

export { MainComponent };
