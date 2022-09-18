import React from "react";

import logo from '../../assets/logo/full.png';

import './MainTitle.css';

const MainTitle = () => {
  return (
    <div>
      <img className="title" src = {logo}></img>
    </div>
  );
};

export default MainTitle;
