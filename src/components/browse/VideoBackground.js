import React, { useEffect } from "react";
import { API_OPTIONS } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTeaserData } from "../../store/moviesSlice";
import useGetHeroTrailerData from "../../hooks/useGetHeroTrailerData";

const VideoBackground = ({ id }) => {
  useGetHeroTrailerData(id);
  const teaser = useSelector((store) => store.movies.teaserData);

  if (!teaser) return null;
  return (
    <div className="relative">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${teaser.key}?autoplay=1&mute=1&controls=0&loop=1&cc_load_policy=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allow="autoplay; encrypted-media"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
      <div className="absolute inset-0 bg-gradient-to-r from-black "></div>
    </div>
  );
};

export default VideoBackground;
