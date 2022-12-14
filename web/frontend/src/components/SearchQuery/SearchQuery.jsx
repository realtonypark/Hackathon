import React, { useState, useEffect } from "react";
import axios from "axios";

import "./SearchQuery.css";

const { kakao } = window;
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

  useEffect(() => {
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
  }, []);

  return (
    <React.Fragment>
      <div className="main">
        <div className="search-query-div">
          <div className="search-title">
            <label className="query-title">
              ????????? ????????? ????????? ???????????????
            </label>
          </div>
          <form className="search-form">
            <div className="search-query">
              <select
                name="??????"
                id="price"
                required
                onChange={onChangePrice}
                value={price}
              >
                <option value="" disabled selected>
                  ??????
                </option>
                <option value="1000">~1000??????</option>
                <option value="2000">1000??????~2000??????</option>
                <option value="3000">2000??????~3000??????</option>
                <option value="4000">3000??????~4000??????</option>
                <option value="5000">4000??????~5000??????</option>
                <option value="over">5000??????~</option>
              </select>

              <select
                name="??????"
                id="area"
                required
                onChange={onChangeArea}
                value={area}
              >
                <option value="" disabled selected>
                  ??????
                </option>
                <option value="1">~1ha</option>
                <option value="10">1ha~10ha</option>
                <option value="30">10ha~30ha</option>
                <option value="50">30ha~50ha</option>
                <option value="100">50ha~100ha</option>
                <option value="over">100ha~</option>
              </select>
              <select
                name="??????"
                id="location"
                required
                onChange={onChangeLocation}
                value={location}
              >
                <option value="" disabled selected>
                  ??????
                </option>
                <option value="??????">??????</option>
                <option value="??????">??????</option>
                <option value="??????">??????</option>
                <option value="??????">??????</option>
                <option value="??????">??????</option>
                <option value="??????">??????</option>
                <option value="??????">??????</option>
                <option value="??????">??????</option>
                <option value="??????">??????</option>
                <option value="??????">??????</option>
                <option value="??????">??????</option>
                <option value="??????">??????</option>
                <option value="??????">??????</option>
                <option value="??????">??????</option>
                <option value="??????">??????</option>
                <option value="??????">??????</option>
              </select>
              <select
                name="????????????"
                id="type"
                required
                onChange={onChangeType}
                value={type}
              >
                <option value="" disabled selected>
                  ????????? ??????
                </option>
                <option value="rice">???</option>
                <option value="wheat">???</option>
                <option value="corn">?????????</option>
                <option value="potato">??????</option>
                <option value="sweetpotato">?????????</option>
                <option value="cabba">??????</option>
                <option value="onion">??????</option>
                <option value="other">??????</option>
              </select>
              <select
                name="????????????"
                id="period"
                required
                onChange={onChangePeriod}
                value={period}
              >
                <option value="" disabled selected>
                  ????????????
                </option>
                <option value="6">~6??????</option>
                <option value="12">6??????~1???</option>
                <option value="24">1???~2???</option>
                <option value="over">2???~</option>
              </select>

              <button className="search-button" onClick={onClickSearch}>
                ??????
              </button>
            </div>
          </form>
          <div className="search-list-div">
            <h1 className="list-title">?????? ??????</h1>
          </div>
          <div className="search-list">
            {landList.map((land) => (
              <div className="search-list-item">
                <div className="search-list-item-title">
                  <h2>{landList.indexOf(land) + 1} </h2>
                  <label>{land.description}</label>
                  <br></br>
                  <label>??????: {land.location} </label>
                  <br></br>
                  <label>??????: {land.price}??????</label>
                  <br></br>
                  <label>?????? ?????? ??????: {land.contractTerm}??????</label>
                  <br></br>
                  <button
                    onClick={() => {
                      setDetail(land);
                    }}
                  >
                    ????????? ??????
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="info">
          <h3>??????: {detail.location}</h3>
          <h3>??????: {detail.area}ha</h3>
          <h3>??????: {detail.address}</h3>
          <h3>??????: {detail.price}??????</h3>
          <h3>?????? ?????? ??????: {detail.contractTerm}??????</h3>
          <h3>????????? ??????: {detail.type}</h3>
          <h3>??????: {detail.description}</h3>
          <img src={detail.image}></img>
          <button className="airbnb">
            <img src="https://www.pngkey.com/png/full/60-606047_airbnb-logo-white-png-airbnb-logo-png-white.png" className="airbnb-logo" />
            <br></br><a href="https://www.airbnb.co.kr">
              AirBnb?????? ???????????? ????????????
            </a>
          </button>
          <button className="johndeere">
            <img src="https://brandlogos.net/wp-content/uploads/2021/10/john-deere-logo-symbol-vector-512x512.png" className="airbnb-logo" />
            <br></br><a href="https://www.deere.asia/ko/">
              John Deere ?????? ????????? ????????????
            </a>
          </button>
        </div>
        <div className="map">
          <div id="myMap" className="map-component"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SearchQuery;
