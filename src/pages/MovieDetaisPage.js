import React from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import MovieCard from "../components/movie/MovieCard";
import { fetcher, apiKey } from "../config/config";
//https://api.themoviedb.org/3/movie/{movie_id}?api_key=3a1ebbff5245f9385c899a7026da8edc
const MovieDetaisPage = () => {
  const { movieID } = useParams();
  const { data, error, loading } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}`,
    fetcher
  );
  if (!data) return null;
  const { backdrop_path, poster_path, title, genres, overview } = data;
  return (
    <>
      <div className="py-20">
        <div className="w-full h-[600px] relative">
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
          <div
            className="w-full h-full bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
            }}
          ></div>
        </div>
        <div className="w-full h-[400px] pb-10 max-w-[800px] mx-auto -mt-[200px] relative z-10">
          <img
            src={`https://image.tmdb.org/t/p/original/${poster_path}`}
            alt=""
            className="w-full object-cover h-full rounded-xl"
          />
        </div>
        <h1 className="text-center text-4xl font-bold mb-10 text-white">
          {title}
        </h1>
        {genres.length > 0 && (
          <div className="flex items-center justify-center gap-x-5 mb-10">
            {genres.map((item) => (
              <span
                className="py-2 px-4 border-primary text-primary border rounded-lg "
                key={item.id}
              >
                {item.name}
              </span>
            ))}
          </div>
        )}
        <p className="text center mb-10 text-base leading-relaxed max-w-[600px] mx-auto">
          {overview}
        </p>
        <MovieCredit></MovieCredit>
        <MovieVideos></MovieVideos>
        <MovieSimilar></MovieSimilar>
      </div>
    </>
  );
};

function MovieCredit() {
  //https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=
  const { movieID } = useParams();
  const { data, error, loading } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${apiKey}`,
    fetcher
  );
  if (!data) return null;

  const { cast } = data;
  if (!cast || cast.length < 0) return null;
  return (
    <>
      <h2 className="text-center text-3xl mb-10">Casts</h2>
      <div className="grid grid-cols-4 gap-5 mx-5">
        {cast.slice(0, 4).map((item) => (
          <div className="cast-item" key={item.id}>
            <img
              src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}
              className="w-full h-[350px] mb-3 object-cover rounded-lg"
              alt=""
            />

            <h3 className="text-xl font-medium text-center">{item.name}</h3>
          </div>
        ))}
      </div>
    </>
  );
}
function MovieVideos() {
  const { movieID } = useParams();
  const { data, error, loading } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${apiKey}`,
    fetcher
  );
  if (!data) return null;
  const { results } = data;
  if (!results || results.length < 0) return null;
  return (
    <div className="py-10">
      <div className="flex flex-col gap-10">
        {results.slice(0, 5).map((item) => (
          <div className="" key={item.id}>
            <h3 className="mb-5 px-2 py-2 text-xl font-medium bg-second inline-block">
              {item.name}
            </h3>
            <div className="w-full h-full aspect-video" key={item.id}>
              <iframe
                width="788"
                height="443"
                src={`https://www.youtube.com/embed/${item.key}`}
                title="LỬNG LƠ ( MASEW x BRAY FT REDT x Ý TIÊN ) - LỬNG VÀ LER | NHẠC HOT TIKTOK HIỆN NAY"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full object-fill"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
function MovieSimilar() {
  const { movieID } = useParams();
  const { data, error, loading } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieID}/similar?api_key=${apiKey}`,
    fetcher
  );
  const { results } = data;
  return (
    <div className="py-10">
      <div className="text-3xl font-medium mb-10 text-center">
        Similar Videos
      </div>
      <div className="movie-list">
        <div className="movie-list text-white">
          <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
            {results.length > 0 &&
              results.map((item) => (
                <SwiperSlide key={item.id}>
                  <MovieCard item={item}></MovieCard>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
export default MovieDetaisPage;
