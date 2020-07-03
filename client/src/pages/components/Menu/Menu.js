import React, { useState } from "react";
import { Link } from "react-router-dom";

import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

export default function Menu() {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        //variant="fullWidth"
        onChange={handleChange}
        scrollButtons="on"
        centered
      >
        <Link to="/">
          <Tab label="Home"></Tab>
        </Link>
        <Link to="/introduce">
          <Tab label="서비스 소개" />
        </Link>
        <Link to="/building">
          <Tab label="투자 상품" />
        </Link>
        <Tab label="회원 가입" />
        <Tab label="로그인" />
      </Tabs>
    </Paper>
  );
}

{
  /* <div position="static">
      <Link to="/">Home</Link>
      <Link to="/introduce">서비스 소개</Link>
      <Link to="/building">투자 상품</Link>
      <Link to="/mypage">My Page</Link>
      <button>로그아웃</button>
    </div> */
}
