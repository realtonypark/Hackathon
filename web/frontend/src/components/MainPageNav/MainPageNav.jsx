import React from "react";
import { NavLink } from "react-router-dom";

import "./MainPageNav.css";

const MainPageNav = () => {
  return (
    <div className="nav">
      <div className="nav__container">
            <NavLink to="/rent" className="nav__link">
                <label className="rent-label">빌리기</label>
            </NavLink>
            <NavLink to="/lend" className="nav__link">
            <label className="lend-label">빌려주기</label>
            </NavLink>
      </div>
    </div>
  );
};

export default MainPageNav;