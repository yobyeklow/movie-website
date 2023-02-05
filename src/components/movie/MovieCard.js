import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ item }) => {
  const { title, vote_average, release_date, poster_path, id } = item;
  const navigate = useNavigate();
  return (
    <div className="select-none flex flex-col movie-card rounded-lg p-3 bg-slate-800 h-full">
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5"
      />
      <div className="flex flex-col flex-1">
        <h3 className="text-lg font-bold mb-3">{title}</h3>
        <div className="flex items center justify-between text-sm opacity-50 mb-5">
          <span>{new Date(release_date).getFullYear()}</span>
          <span>{vote_average}</span>
        </div>
        <button
          onClick={() => {
            return navigate(`/movie/${id}`);
          }}
          className="mt-auto mb-5 w-full py-3 px-6 rounded-lg capitalize bg-primary"
        >
          Watch Now
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
