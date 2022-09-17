import React, { useState, useEffect } from "react";
import LandList from "../../components/LandList/LandList";

import "./SearchQuery.css";

const SearchQuery = () => {
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [area, setArea] = useState("");
  const [location, setLocation] = useState("");
  const [period, setPeriod] = useState("");

  const onChangeType = (e) => {
    setType(e.target.value);
  };

  const onChangePrice = (e) => {
    setPrice(e.target.value);
  };

  const onChangeArea = (e) => {
    setArea(e.target.value);
  };

  const onChangeLocation = (e) => {
    setLocation(e.target.value);
  };

  const onChangePeriod = (e) => {
    setPeriod(e.target.value);
  };

  const onClickSearch = (e) => {
    alert("clicked");
    e.preventDefault();
  };
  
  useEffect(() => {
    console.log(type);
  }, [type]);

  useEffect(() => {
    console.log(price);
  }, [price]);

  useEffect(() => {
    console.log(area);
  }, [area]);

  useEffect(() => {
    console.log(location);
  }, [location]);

  useEffect(() => {
    console.log(period);
  }, [period]);

  return (
    <React.Fragment>
      <div className="search-query-div">
        <div className="search-title">
          <label className="query-title">검색할 농지의 정보를 입력하세요</label>
        </div>
        <form className="search-form">
          <div className="search-query">
            <select
              name="가격"
              id="price"
              required
              onChange={onChangePrice}
              value={price}
            >
              <option value="" disabled selected>
                금액
              </option>
              <option value="all">전체</option>
              <option value="1000">~1000만원</option>
              <option value="2000">1000만원~2000만원</option>
              <option value="3000">2000만원~3000만원</option>
              <option value="4000">3000만원~4000만원</option>
              <option value="5000">4000만원~5000만원</option>
              <option value="over">5000만원~</option>
            </select>

            <select
              name="면적"
              id="area"
              required
              onChange={onChangeArea}
              value={area}
            >
              <option value="" disabled selected>
                면적
              </option>
              <option value="all">전체</option>
              <option value="1">~1ha</option>
              <option value="10">1ha~10ha</option>
              <option value="30">10ha~30ha</option>
              <option value="50">30ha~50ha</option>
              <option value="100">50ha~100ha</option>
              <option value="over">100ha~</option>
            </select>
            <select
              name="지역"
              id="location"
              required
              onChange={onChangeLocation}
              value={location}
            >
              <option value="" disabled selected>
                지역
              </option>
              <option value="all">전체</option>
              <option value="서울">서울</option>
              <option value="경기">경기</option>
              <option value="인천">인천</option>
              <option value="강원">강원</option>
              <option value="충북">충북</option>
              <option value="충남">충남</option>
              <option value="대전">대전</option>
              <option value="경북">경북</option>
              <option value="경남">경남</option>
              <option value="대구">대구</option>
              <option value="울산">울산</option>
              <option value="부산">부산</option>
              <option value="광주">광주</option>
              <option value="전북">전북</option>
              <option value="전남">전남</option>
              <option value="제주">제주</option>
            </select>
            <select
              name="토지종류"
              id="type"
              required
              onChange={onChangeType}
              value={type}
            >
              <option value="" disabled selected>
                경작물 종류
              </option>
              <option value="all">전체</option>
              <option value="rice">쌀</option>
              <option value="wheat">밀</option>
              <option value="corn">옥수수</option>
              <option value="potato">감자</option>
              <option value="sweetpotato">고구마</option>
              <option value="cabba">배추</option>
              <option value="onion">양파</option>
              <option value="other">기타</option>
            </select>
            <select
              name="대여기간"
              id="period"
              required
              onChange={onChangePeriod}
              value={period}
            >
              <option value="" disabled selected>
                대여기간
              </option>
              <option value="all">전체</option>
              <option value="6">~6개월</option>
              <option value="12">6개월~1년</option>
              <option value="24">1년~2년</option>
              <option value="over">2년~</option>
            </select>

            <button className="search-button" onClick={onClickSearch}>
              검색
            </button>
          </div>
        </form>
      </div>
      <LandList />
    </React.Fragment>
  );
};

export default SearchQuery;
