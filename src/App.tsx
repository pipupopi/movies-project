import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainComponent } from "./Components/MainComponent";
import { Authorization } from "./Components/AuthPage/AuthPage";
import { DetailsFilm } from "./Components/DetailsPage/DetailsPage";
import { ErrorPage } from "./Components/ErrorPage/ErrorPage";
import { Search } from "./Components/SearchPage/SearchPage";
import { store } from "./redux/store";
import React from "react";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainComponent />}>
            <Route
              path="/authorization"
              element={<Authorization />}
            />
          </Route>
          <Route
            path="/details_film/:filmId"
            element={<DetailsFilm />}
          />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
