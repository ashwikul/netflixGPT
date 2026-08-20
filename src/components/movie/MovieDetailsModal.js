import React, { useEffect } from "react";
import useGetMovieDetails from "../../hooks/useGetMovieDetails";
import VideoBackground from "../browse/VideoBackground";
import { useSearchParams } from "react-router-dom";
import MovieDetails from "./MovieDetails";
import { BASIC_URL } from "../../utils/constants";

const MovieDetailsModal = ({ movieId }) => {
  const movieDetails = useGetMovieDetails(movieId);
  const [, setSearchParams] = useSearchParams();
  useEffect(() => {
    // Prevent background scrolling
    document.body.style.overflow = "hidden";

    // Restore scrolling when modal closes/unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  const handleClose = () => {
    setSearchParams({});
  };
  if (!movieDetails) return null;
  return (
    <div className="fixed w-3/5 top-[10%] left-1/2 -translate-x-1/2 h-auto rounded-lg overflow-hidden ">
      <div
        onClick={handleClose}
        className="z-10 absolute top-8 right-8 text-white cursor-pointer flex justify-center items-center p-5 font-bold bg-[#0f0f0f] opacity-75 rounded-full"
      >
        X
      </div>
      <div className="w-full">
        <img
          src={`${BASIC_URL}${movieDetails.backdrop_path}`}
          className="w-full "
        />
        <MovieDetails movie={movieDetails} />
      </div>
    </div>
  );
};

export default MovieDetailsModal;
