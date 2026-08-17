import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute text-white top-[40%] pl-16 w-[620px] flex flex-col gap-4 ">
      <div className="text-3xl font-bold">{title}</div>
      <div className="text-lg font-semibold">{overview}</div>
      {/* <div className="flex gap-2">
        <button className="px-4 py-2 bg-white text-black font-bold rounded-lg flex gap-1 items-center">
          <span>
            <img src="/image.png" className="w-4 h-4" />
          </span>{" "}
          Play
        </button>

        <button className="px-4 py-2 text-white  font-bold rounded-lg flex gap-1 items-center bg-gray-600">
          <span>
            <img src="/more.png" className="w-4 h-4" />
          </span>{" "}
          More info
        </button>
      </div> */}
    </div>
  );
};

export default VideoTitle;
