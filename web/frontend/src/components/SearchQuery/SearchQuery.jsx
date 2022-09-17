import React, { useState, useEffect } from "react";
import axios from "axios";

import "./SearchQuery.css";

const SearchQuery = () => {
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [area, setArea] = useState("");
  const [location, setLocation] = useState("");
  const [period, setPeriod] = useState("");
  const [landList, setLandList] = useState([]);
  const [detail, setDetail] = useState({});

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
    e.preventDefault();
    axios({
      method: "get",
      url:
        "http://localhost:8800/lands?type=" +
        type +
        "&price=" +
        price +
        "&area=" +
        area +
        "&location=" +
        location +
        "&period=" +
        period,
    })
      .then((res) => {
        setLandList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
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
    console.log(
      `http://localhost:8800/lands?type=${type}&price=${price}&area=${area}&location=${location}&period=${period}`
    );
  }, [location]);

  useEffect(() => {
    console.log(period);
  }, [period]);

  useEffect(() => {
    console.log(landList);
  }, [landList]);

  useEffect(() => {
    console.log(detail);
  }, [detail]);

  return (
    <React.Fragment>
      <div className="main">
        <div className="search-query-div">
          <div className="search-title">
            <label className="query-title">
              검색할 농지의 정보를 입력하세요
            </label>
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
          <div className="search-list-div">
            <h1 className="list-title">검색 결과</h1>
          </div>
          <div className="search-list">
            {landList.map((land) => (
              <div className="search-list-item">
                <div className="search-list-item-title">
                  <h2>{landList.indexOf(land) + 1} </h2>
                  <label>{land.description}</label>
                  <br></br>
                  <label>지역: {land.location} </label>
                  <br></br>
                  <label>가격: {land.price}만원</label>
                  <br></br>
                  <label>계약 희망 기간: {land.contractTerm}개월</label>
                  <br></br>
                  <button
                    onClick={() => {
                      setDetail(land);
                    }}
                  >
                    자세히 보기
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="info">
          <h3>지역: {detail.location}</h3>
          <h3>면적: {detail.area}ha</h3>
          <h3>주소: {detail.address}</h3>
          <h3>가격: {detail.price}만원</h3>
          <h3>계약 희망 기간: {detail.contractTerm}개월</h3>
          <h3>경작물 종류: {detail.type}</h3>
          <h3>설명: {detail.description}</h3>
        </div>
        <div className="map">
          <h1>map</h1>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SearchQuery;
