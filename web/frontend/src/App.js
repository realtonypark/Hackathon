import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import MainPage from './pages/MainPage/MainPage';

import './App.css';
import RentPage from './pages/RentPage/RentPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/rent" element={<RentPage />} />
        <Route path="/contact" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
