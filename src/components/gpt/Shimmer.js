import React from "react";

const Shimmer = () => {
  const shimmerItem = (
    <div className="mb-8 ">
      <div className="w-40 h-5 bg-[#817d7d] rounded-sm mb-4 animate-pulse"></div>
      <div className="flex gap-4 animate-pulse">
        <div className="w-[215px] h-[121px] bg-[#817d7d] rounded-lg"></div>
        <div className="w-[215px] h-[121px] bg-[#817d7d] rounded-lg"></div>
        <div className="w-[215px] h-[121px] bg-[#817d7d] rounded-lg"></div>
        <div className="w-[215px] h-[121px] bg-[#817d7d] rounded-lg"></div>
      </div>
    </div>
  );
  return (
    <div className="bg-black mt-16 rounded-lg p-4">
      {shimmerItem}
      {shimmerItem}
      {shimmerItem}
    </div>
  );
};

export default Shimmer;
