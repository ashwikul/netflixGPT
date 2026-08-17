import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTmdbMovieResult, setLoading } from "../store/gptSlice";
import { searchMovieTMDB } from "../utils/tmdbApi";

const useGetMovieSuggestions = () => {
  const dispatch = useDispatch();

  const { suggestions } = useSelector((store) => store.gpt);

  useEffect(() => {
    if (!suggestions?.length) return;

    const fetchMovieData = async () => {
      dispatch(setLoading(true));
      try {
        const moviePromises = suggestions.map((movie) =>
          searchMovieTMDB(movie),
        );

        const results = await Promise.all(moviePromises);

        dispatch(addTmdbMovieResult(results));
      } catch (error) {
        console.error("Failed to fetch movie data:", error);
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchMovieData();
  }, [suggestions, dispatch]);
};

export default useGetMovieSuggestions;
