import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./Components/Body/Body";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter basename="/JungleTech">
        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                <NavBar />
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
