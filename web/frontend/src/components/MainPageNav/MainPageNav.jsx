import React from "react";
import { NavLink } from "react-router-dom";

import "./MainPageNav.css";

const MainPageNav = () => {
  return (
    <div className="nav">
      <div className="nav__container">
            <NavLink to="/rent" className="nav__link">
                빌리기
            </NavLink>
            <NavLink to="/lend" className="nav__link">
                빌려주기
            </NavLink>
      </div>
    </div>
  );
};

export default MainPageNav;