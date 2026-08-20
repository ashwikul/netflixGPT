import React, { useEffect } from "react";
import Header from "../header/Header";
import useNowPayingMovies from "../../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";
import GptPage from "../gpt/GptPage";
import { useSearchParams } from "react-router-dom";
import MovieDetailsModal from "../movie/MovieDetailsModal";

const Browse = () => {
  const [searchParams] = useSearchParams();
  const movieId = searchParams.get("movie");

  const nowPlayingMovies = useNowPayingMovies();
  const gptView = useSelector((store) => store.movies.showGptView);
  return (
    <div>
      <Header />
      {gptView ? (
        <GptPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
          {movieId && <MovieDetailsModal movieId={movieId} />}
        </>
      )}
    </div>
  );
};

export default Browse;
