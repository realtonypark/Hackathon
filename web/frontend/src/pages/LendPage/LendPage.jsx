import React from "react";

import "./LendPage.css";

const LendPage = () => {
  return (
    <div className="lend-form">
      <h1>땅 등록하기</h1>
      <form>
        땅 위치: &nbsp;
        <select name="지역" required>
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
        <br></br>
        땅 면적: &nbsp;
        <input type="number" required />
        <br></br>
        <br></br>
        땅 사진: &nbsp;
        <input type="text" required />
        <br></br>
        <br></br>
        농작물 종류: &nbsp;
        <select
          name="토지종류"
          id="type"
          required
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
        <br></br>
        <br></br>
        주소: &nbsp;
        <input type="text" required />
        <br></br>
        <br></br>
        거주 공간: &nbsp;
        <input type="radio" required /> 있음
        <input type="radio" required /> 없음
        <br></br>
        <br></br>
        농기구 제공: &nbsp;
        <input type="radio" required /> 있음
        <input type="radio" required /> 없음
        <br></br>
        <br></br>
        희망 계약 기간: &nbsp;
        <input type="number" required /> 개월
        <br></br>
        <br></br>
        희망 계약 금액: &nbsp;
        <input type="number" required /> 만원
        <br></br>
        <br></br>
        소개: &nbsp;
        <input type="text" required />
        <br></br>
        <br></br>
        소유자: &nbsp;
        <input type="text" required />
        <br></br>
        <br></br>

        <button className="submit" onClick={() => {
          alert("땅 등록이 완료되었습니다.");
        }}>등록하기</button>
      </form>
    </div>
  );
};

export default LendPage;
