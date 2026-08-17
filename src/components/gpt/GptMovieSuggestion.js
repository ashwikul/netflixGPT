import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../movie/MovieList";
import useGetMovieSuggestions from "../../hooks/useGetMovieSuggestions";
import Shimmer from "./Shimmer";

const GptMovieSuggestion = () => {
  useGetMovieSuggestions();

  const { suggestions, tmdbMovieResult, isLoading } = useSelector(
    (store) => store.gpt,
  );
  console.log("tmdbMovieResults", tmdbMovieResult);

  const hasMovies = tmdbMovieResult?.some((movieList) => movieList?.length > 0);

  if (isLoading) {
    return <Shimmer />;
  }

  if (!isLoading && tmdbMovieResult && !hasMovies) {
    return (
      <div className="text-white text-center mt-16">
        No movies found. Try another search.
      </div>
    );
  }
  if (!suggestions?.length) return null;
  return (
    <div className="bg-black mt-16 rounded-lg p-4">
      {suggestions.map((movie, index) => (
        <MovieList key={movie} title={movie} list={tmdbMovieResult?.[index]} />
      ))}
    </div>
  );
};

export default GptMovieSuggestion;
