import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { Home, GameDetails } from "./containers";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/game-details" element={<GameDetails />} />
    </Routes>
  );
}

export default App;
