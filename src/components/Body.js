import React from "react";
import Header from "./Header";
import Browse from "./Browse";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";

const Body = () => {
  return (
    <Provider store={appStore}>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/browse" element={<Browse />}></Route>
      </Routes>
    </Provider>
  );
};

export default Body;
