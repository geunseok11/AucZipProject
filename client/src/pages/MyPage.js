import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MyInfo from "./components/MyPage/MyInfo";
import MyInvestInfo from "./components/MyPage/MyInvestInfo";

export default class MyPage extends Component {
  render(props) {
    if (this.props.isLogin) {
      return (
        <div>
          <h1>Mypage</h1>
          <MyInfo /><br/>
        <MyInvestInfo /> <br/>
        </div>
      );
    } else {
      return (
        <div>
          <h1>NOT FOUND</h1>
        </div>
      );
    }
  }
}
