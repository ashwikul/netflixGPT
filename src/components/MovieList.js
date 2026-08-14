import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, list }) => {
  console.log("list", list);

  if (list === null) return;
  return (
    <div className="mb-16">
      <h1 className="text-white font-bold text-xl mb-4 pl-16">{title}</h1>
      <div className="w-full flex gap-4 overflow-x-auto ">
        {list.map((movie) => {
          return <MovieCard poster={movie.backdrop_path} />;
        })}
      </div>
    </div>
  );
};

export default MovieList;
