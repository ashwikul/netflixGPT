import React, { useEffect } from "react";
import Header from "../header/Header";
import useNowPayingMovies from "../../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";
import GptPage from "../gpt/GptPage";

const Browse = () => {
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
        </>
      )}
    </div>
  );
};

export default Browse;
