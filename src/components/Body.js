import React from "react";
import Header from "./header/Header";
import Browse from "./browse/Browse";
import { Route, Routes } from "react-router-dom";
import Login from "./login/Login";
import { Provider } from "react-redux";
import appStore from "../store/appStore";
import GPTSearch from "./gpt/GptSearch";

const Body = () => {
  return (
    <Provider store={appStore}>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/browse" element={<Browse />}></Route>
      </Routes>
    </Provider>
  );
};

export default Body;
