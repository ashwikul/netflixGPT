import { API_OPTIONS } from "./constants";

export const searchMovieTMDB = async (movie) => {
  //make api call to fetch movie details by name
  const data = await fetch(
    "https://api.themoviedb.org/3/search/movie?query=" +
      movie +
      "&include_adult=false&language=en-US&page=1",
    API_OPTIONS,
  );
  const res = await data.json();
  return res.results;
};
