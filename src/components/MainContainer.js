import React, { useEffect } from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  console.log("movies", movies);
  if (movies === null) return;
  const heroMovie = movies[0];
  return (
    <div>
      <VideoBackground id={heroMovie.id} />
      <VideoTitle title={heroMovie.title} overview={heroMovie.overview} />
    </div>
  );
};

export default MainContainer;
