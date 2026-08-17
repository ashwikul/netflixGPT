import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../movie/MovieList";
import usePopularMovies from "../../hooks/usePopularMovies";
import useTopRatedMovies from "../../hooks/useTopRatedMovies";
import useUpcomingMovies from "../../hooks/useUpcomingMovies";

const SecondaryContainer = () => {
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies,
  );

  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

  return (
    <div className="bg-black absolute top-[80%] w-full ">
      <MovieList title="Now Playing Movies" list={nowPlayingMovies} />
      <MovieList title="Popular Movies" list={popularMovies} />
      <MovieList title="Top Rated Movies" list={topRatedMovies} />
      <MovieList title="Upcoming Movies" list={upcomingMovies} />
    </div>
  );
};

export default SecondaryContainer;
