import React from "react";
import { Provider } from "react-redux";
import { MainComponent } from "./Components/MainComponent";
import { store } from "./redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ErrorPage } from "./Components/error_page/error_page";
import { Authorization } from "./Components/authorization/authorization";
import { DetailsFilm } from "./Components/details_film/details";
import { Search } from "./Components/search/search";
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
