import { Fragment } from "react";
import { useNavigate, NavLink } from "react-router-dom";

import MovieList from "./components/movie/MovieList";
function App() {
  return (
    <Fragment>
      <header className="header py-10 mb-5 text-white flex items-center justify-center gap-5 ">
        <span>Home</span>
        <span>Movie</span>
      </header>
      <section className="banner mb-20 page-container h-[500px]">
        <div className="rounded-lg relative w-full h-full">
          <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
          <img
            className="object-cover w-full h-full rounded-lg"
            src="https://lumiere-a.akamaihd.net/v1/images/au_homepage_avengersendgame_hero_short_m_5618553b.jpeg?region=0,0,750,668"
            alt=""
          />
          <div className="absolute left-5 bottom-5 w-full text-white">
            <h2 className="font-bold text-3xl mb-5">Avengers: Endgame</h2>
            <div className="flex gap-x-3 items-center mb-8">
              <span className="p-4 border-white px-4 py-2 rounded-md border">
                Adventure
              </span>
              <span className="p-4 border-white px-4 py-2 rounded-md border">
                Adventure
              </span>
              <span className="p-4 border-white px-4 py-2 rounded-md border">
                Adventure
              </span>
            </div>
            <button className="py-3 px-6 rounded-lg bg-primary text-white font-medium">
              Watch
            </button>
          </div>
        </div>
      </section>
      <section className="movies-layout page-container pb-20 text-white">
        <h2 className="capitalize  mb-10 text-3xl font-bold">Now playing</h2>
        <MovieList></MovieList>
      </section>
      <section className="movies-layout page-container pb-20 text-white">
        <h2 className="capitalize  mb-10 text-3xl font-bold">Top Rated</h2>
        <div className="movies-list grid grid-cols-4 gap-10">
          <div className="movie-card rounded-lg p-3 bg-slate-800">
            <img
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/whatif-1647462169.png"
              alt=""
              className="w-full h-[250px] object-cover rounded-lg mb-5"
            />
            <h3 className="text-lg font-bold mb-3">Every Marvel Movie</h3>
            <div className="flex items center justify-between text-sm opacity-50 mb-10">
              <span>2017</span>
              <span>7.4</span>
            </div>
            <button className="w-full py-3 px-6 rounded-lg capitalize bg-primary">
              Watch Now
            </button>
          </div>
        </div>
      </section>
      <section className="movies-layout page-container pb-20 text-white">
        <h2 className="capitalize  mb-10 text-3xl font-bold">Trending</h2>
        <div className="movies-list grid grid-cols-4 gap-10">
          <div className="movie-card rounded-lg p-3 bg-slate-800">
            <img
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/whatif-1647462169.png"
              alt=""
              className="w-full h-[250px] object-cover rounded-lg mb-5"
            />
            <h3 className="text-lg font-bold mb-3">Every Marvel Movie</h3>
            <div className="flex items center justify-between text-sm opacity-50 mb-10">
              <span>2017</span>
              <span>7.4</span>
            </div>
            <button className="w-full py-3 px-6 rounded-lg capitalize bg-primary">
              Watch Now
            </button>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default App;
