import React from "react";

const MovieDetails = ({ movie }) => {
  const { title, overview, release_date, genres } = movie;
  return (
    <div className=" text-white  px-16 py-4 flex flex-col gap-4 w-full bg-[#0f0f0f]">
      <div className="text-2xl font-semibold">{title}</div>
      <div className="text-md font-medium">{overview}</div>

      {/* <button className="px-4 py-2 w-fit  bg-white text-black font-bold rounded-lg flex gap-1 items-center">
        <span>
          <img src="/image.png" className="w-4 h-4" />
        </span>{" "}
        Play
      </button> */}
      <div className="font-medium">{release_date.slice(0, 4)}</div>
      <div>
        Genres :
        <span className="font-medium">
          {genres.map((genre) => genre.name).join(",")}{" "}
        </span>
      </div>
    </div>
  );
};

export default MovieDetails;
