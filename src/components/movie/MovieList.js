import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/scss";
import MovieCard from "./MovieCard";
import useSWR from "swr";
import { fetcher } from "../../config/config";
const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const { data, error, isLoading } = useSWR(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=3a1ebbff5245f9385c899a7026da8edc",
    fetcher
  );
  useEffect(() => {
    if (data && data.results) {
      setMovies(data.results);
    }
  }, [data]);
  console.log(data);
  return (
    <div className="movie-list">
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCard item={item}></MovieCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
