import React from "react";
import MainPageNav from "../../components/MainPageNav/MainPageNav";
import MainTitle from "../../components/MainTitle/MainTitle";
import Subtitle from "../../components/Subtitle/Subtitle";

const MainPage = () => {
  return (
    <React.Fragment>
        <MainTitle />
        <MainPageNav />
    </React.Fragment>
  );
}

export default MainPage;
