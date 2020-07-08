import React from "react";
import MyInfo from "./components/MyPage/MyInfo";
import MyInvestInfo from "./components/MyPage/MyInvestInfo";

const MyPage = ({ isLogin }) => {
  if (isLogin) {
    return (
      <div>
        <h1>Mypage</h1>
        <MyInfo />
        <br />
        <MyInvestInfo /> <br />
      </div>
    );
  } else {
    return (
      <div>
        <h1>NOT FOUND</h1>
      </div>
    );
  }
};

export default MyPage;
