import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, list }) => {
  if (!list) return;

  return (
    <div className="mb-16">
      <h1 className="text-white font-bold text-xl mb-4 pl-16">{title}</h1>
      <div className="w-full flex gap-4 overflow-x-auto ">
        {list.map((movie) => {
          return <MovieCard movie={movie} key={movie.id} />;
        })}
      </div>
    </div>
  );
};

export default MovieList;
