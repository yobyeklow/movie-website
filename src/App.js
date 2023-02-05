import { Fragment } from "react";
import { useNavigate, NavLink, Route, Routes } from "react-router-dom";

import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Banner from "./components/banner/Banner";
import MovieList from "./components/movie/MovieList";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import MovieDetaisPage from "./pages/MovieDetaisPage";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Main></Main>}>
          <Route
            path="/"
            element={
              <Fragment>
                <Banner></Banner>
                <HomePage></HomePage>
              </Fragment>
            }
          ></Route>
          <Route
            path="/movies"
            element={
              <Fragment>
                <MoviePage></MoviePage>
              </Fragment>
            }
          ></Route>
          <Route
            path="/movie/:movieID"
            element={
              <Fragment>
                <MovieDetaisPage></MovieDetaisPage>
              </Fragment>
            }
          ></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
