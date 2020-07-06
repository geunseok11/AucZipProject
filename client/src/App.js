import React, { Component } from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";

import Home from "./pages/Home";
import Introduce from "./pages/Introduce";
import MyPage from "./pages/MyPage";
import Building from "./pages/Building";
import Admin from "./pages/Admin"
import Menu from "./pages/components/Menu/Menu";

import Signup from "./pages/components/Menu/Signup";

const backGroundDiv = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 100%;
  opacity: 0.5;
  background-color: rgb(0, 0, 0);
`;

export default class App extends Component {
  state = {
    isLogin: false,
    isClick: true,
    userInfo: {
      username: "",
      email: "",
      mobile: "",
    },
  };

  handleIsLogin = (status) => {
    this.setState({
      isLogin: status,
    });
  };

  render() {
    const { isLogin, isClick, userInfo } = this.state;

    return (
      <backGroundDiv className="App">
        <Menu
          isLogin={isLogin}
          handleIsLogin={this.handleIsLogin}
          isClick={isClick}
        />
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/introduce" render={() => <Introduce />} />
        <Route exact path="/building" render={() => <Building />} />
        <Route exact path="/mypage" render={() => <MyPage />} />
        <Route exact path="/admin" render={() => <Admin />} />
        <Route
          exact
          path="/signup"
          render={() => (
            <Signup
              isLogin={isLogin}
              url="http://54.180.105.165:3040/user/signup"
            />
          )}
        />
      </backGroundDiv>
    );
  }
}
