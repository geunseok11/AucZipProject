import React, { Component } from "react";
import { Route } from "react-router-dom";

import Home from "./pages/Home";
import Introduce from "./pages/Introduce";
import MyPage from "./pages/MyPage";
import Building from "./pages/Building";
import Admin from "./pages/Admin";

import Menu from "./pages/components/Menu/Menu";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    };
    this.handleLoginStatus = this.handleLoginStatus.bind(this);
  }

  handleLoginStatus = (status) => {
    this.setState({
      isLogin: status,
    });
  };

  render() {
    return (
      <div className="App">
        <Menu
          isLogin={this.state.isLogin}
          handleLoginStatus={this.handleLoginStatus}
        />
        <Route path="/" component={Home} exact={true} />
        <Route path="/introduce" component={Introduce} />
        <Route path="/building" component={Building} />
        <Route path="/mypage" component={MyPage} />
        <Route path="/admin" component={Admin} />
      </div>
    );
  }
}
