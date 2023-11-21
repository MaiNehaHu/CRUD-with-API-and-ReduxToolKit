import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./Components/Body/Body";

import { useDispatch } from "react-redux";
import { ReadList } from "./Store/Slices/ReadSlice";
import Header from "./Components/Header/Header";

function App() {
  const dispatch = useDispatch();

  function init() {
    dispatch(ReadList());
  }

  window.addEventListener("load", () => {
    init();
  });

  return (
    <React.Fragment>
      <BrowserRouter basename="/CRUD-with-API">
        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                <Header />
                <Body />
              </React.Fragment>
            }
          />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
