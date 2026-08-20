import React, { useRef } from "react";
import Header from "../header/Header";
import groq from "../../utils/groq";
import { useDispatch } from "react-redux";
import { addSuggestions } from "../../store/gptSlice";

const GptSearch = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();
  async function getGroqChatCompletion() {
    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query" +
      searchText.current.value +
      ". give me only 5 names of movies,comma separated like the example result given ahead. Example result : Sholay,Don,Golmaal,Dangal,Koi Mi Gaya ";

    return groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: gptQuery,
        },
      ],
      model: "openai/gpt-oss-20b",
    });
  }
  const handleGptSearchClick = async () => {
    //make an api call to gpt api and get movie results
    const data = await getGroqChatCompletion();
    const gptResults = data.choices[0]?.message?.content || "";
    const gptResultsArray = gptResults.split(",");
    dispatch(addSuggestions(gptResultsArray));
  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 grid grid-cols-[8fr_2fr] gap-3"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          placeholder="What would you like to watch today?"
          className="border p-2 rounded-lg"
        />
        <button
          className="bg-red-700 p-2 text-white rounded-lg font-semibold"
          onClick={handleGptSearchClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearch;
