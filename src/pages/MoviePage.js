import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/scss";
import useSWR from "swr";
import { apiKey, fetcher } from "../config/config";
import MovieCard from "../components/movie/MovieCard";
import useDebounce from "../hooks/useDebounce";
import ReactPaginate from "react-paginate";
const itemsPerPage = 20;
const MoviePage = () => {
  const [nextPage, setNextPage] = useState(1);

  const [url, setURL] = useState(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${nextPage}`
  );
  const [itemSet, setItemset] = useState(0);
  const [filter, setFilter] = useState("");
  const filterDebounce = useDebounce(filter, 2000);
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const { data, error, isLoading } = useSWR(url, fetcher);
  const loading = !data && !error;
  useEffect(() => {
    if (filterDebounce) {
      setURL(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${filterDebounce}&page=${nextPage}`
      );
    } else
      setURL(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${nextPage}`
      );
  }, [filterDebounce, nextPage]);
  const movies = data?.results || [];
  if (!data || data.results.length < 0) return null;
  const { page, total_pages } = data;
  const endOffset = itemSet + itemsPerPage;

  const pageCount = Math.ceil(total_pages / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % total_pages;
    setItemset(newOffset);
    setNextPage(event.selected + 1);
  };
  return (
    <div className="py-10 page-container">
      <div className="flex mb-5">
        <div className="flex-1">
          <input
            onChange={handleFilterChange}
            type="text"
            className="w-full p-4 bg-slate-800 text-white outline-none"
            placeholder="Nhập tên phim để tìm kiếm..."
          />
        </div>
        <button className="p-4 bg-primary text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
      {loading && (
        <div className="w-10 h-10 border-t-transparent border-t-4 mx-auto animate-spin rounded-full border-4 border-primary"></div>
      )}
      <div className="grid grid-cols-4 gap-10 text-white">
        {!loading &&
          movies.length > 0 &&
          movies.map((item) => (
            <MovieCard item={item} key={item.id}></MovieCard>
          ))}
      </div>

      <ReactPaginate
        breakLabel="..."
        nextLabel="Next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< Previous"
        renderOnZeroPageCount={null}
        className="pagination"
      />
    </div>
  );
};

export default MoviePage;
