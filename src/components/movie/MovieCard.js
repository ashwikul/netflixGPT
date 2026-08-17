import React from "react";
import { BASIC_URL } from "../../utils/constants";
import { toggleMovieDetails } from "../../store/moviesSlice";
import { useSearchParams } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const [, setSearchParams] = useSearchParams();
  const handleMovieClick = () => {
    setSearchParams({ movie: movie.id });
  };
  return (
    <div
      className="w-[215px] h-[121px] flex-shrink-0 "
      onClick={handleMovieClick}
    >
      <img src={`${BASIC_URL}${movie.backdrop_path}`} className="rounded-lg" />
    </div>
  );
};

export default MovieCard;
