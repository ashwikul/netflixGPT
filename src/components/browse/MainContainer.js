import React, { useEffect } from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  if (movies === null) return;
  const heroMovie = movies[0];
  return (
    <div>
      <VideoBackground id={heroMovie.id} />
      <VideoTitle
        title={heroMovie.title}
        overview={heroMovie.overview}
        id={heroMovie.id}
      />
    </div>
  );
};

export default MainContainer;
