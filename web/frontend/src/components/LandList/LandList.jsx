import React from "react";

import "./LandList.css";

const LandList = (props) => {
  return (
    <React.Fragment>
      <div className="search-list-div">
        <h1 className="list-title">검색 결과</h1>
      </div>
      <div className="search-list">
        {props.info.map((land) => (
          <div className="search-list-item">
            <div className="search-list-item-title">
              <h2>{props.info.indexOf(land) + 1} </h2>
              <label>{land.description}</label>
              <br></br>
              <label>지역: {land.location} </label>
              <br></br>
              <label>가격: {land.price}만원</label>
              <br></br>
              <label>계약 희망 기간: {land.contractTerm}개월</label>
              <br></br>
              <button>자세히 보기</button>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default LandList;
