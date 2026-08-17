import React from "react";
import GptSearch from "./GptSearch";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_COVER } from "../../utils/constants";
import { useSelector } from "react-redux";
import Shimmer from "./Shimmer";

const GptPage = () => {
  const { suggestions } = useSelector((store) => store.gpt);
  return (
    <div className="min-h-screen relative">
      <div
        className="fixed inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${BG_COVER})` }}
      />
      <GptSearch />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptPage;
