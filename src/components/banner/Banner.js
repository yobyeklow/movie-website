import React, { useEffect, useState } from "react";
import useSWR from "swr";
import "swiper/scss";
import { fetcher } from "../../config/config";
import { SwiperSlide, Swiper } from "swiper/react";
const Banner = () => {
  const [movies, setMovies] = useState([]);
  const { data, error, isLoading } = useSWR(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=3a1ebbff5245f9385c899a7026da8edc",
    fetcher
  );
  useEffect(() => {
    if (data && data.results) {
      setMovies(data.results);
    }
  }, [data]);
  console.log(data);
  return (
    <section className="overflow-hidden banner mb-20 page-container h-[500px]">
      <Swiper grabCursor={"true"} slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItem item={item}></BannerItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};
function BannerItem({ item }) {
  return (
    <div className="rounded-lg relative w-full h-full">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
      <img
        className="object-cover w-full h-full rounded-lg object-top"
        src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
        alt=""
      />
      <div className="absolute left-5 bottom-5 w-full text-white">
        <h2 className="font-bold text-3xl mb-5">{item.title}</h2>
        <div className="flex gap-x-3 items-center mb-8">
          <span className="p-4 border-white px-4 py-2 rounded-md border">
            Adventure
          </span>
        </div>
        <button className="py-3 px-6 rounded-lg bg-primary text-white font-medium">
          Watch
        </button>
      </div>
    </div>
  );
}
export default Banner;
