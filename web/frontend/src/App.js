import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";

import "./App.css";
import RentPage from "./pages/RentPage/RentPage";
import LendPage from "./pages/LendPage/LendPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/rent" element={<RentPage />} />
        <Route path="/lend" element={<LendPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
