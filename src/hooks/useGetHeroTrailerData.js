import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTeaserData } from "../store/moviesSlice";

function useGetHeroTrailerData(id) {
  const dispatch = useDispatch();
  const getMovieTrailer = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos`,
      API_OPTIONS,
    );
    const data = await response.json();
    const teaserList = data.results.filter(
      (clipObj) => clipObj.type === "Trailer",
    );
    const teaserData = teaserList.length > 0 ? teaserList[0] : data[0];
    dispatch(addTeaserData(teaserData));
  };
  useEffect(() => {
    getMovieTrailer();
  }, []);
}

export default useGetHeroTrailerData;
