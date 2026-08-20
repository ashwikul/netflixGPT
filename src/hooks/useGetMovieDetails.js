import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const useGetMovieDetails = (movieId) => {
  const [movieDetails, setMovieDetails] = useState(null);
  const fetchMovieDetails = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "?language=en-US",
      API_OPTIONS,
    );
    const res = await data.json();
    setMovieDetails(res);
  };

  useEffect(() => {
    fetchMovieDetails();
  }, []);
  return movieDetails;
};

export default useGetMovieDetails;
