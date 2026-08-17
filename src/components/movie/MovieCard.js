import React from "react";
import { BASIC_URL } from "../../utils/constants";

const MovieCard = ({ poster }) => {
  return (
    <div className="w-[215px] h-[121px] flex-shrink-0 ">
      <img src={`${BASIC_URL}${poster}`} className="rounded-lg" />
    </div>
  );
};

export default MovieCard;
