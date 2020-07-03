import React, { Component } from "react";
import { Route } from "react-router-dom";

import Home from "./pages/Home";
import Introduce from "./pages/Introduce";
import MyPage from "./pages/MyPage";
import Building from "./pages/Building";
import Admin from "./pages/Admin";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={Home} />
        <Route path="/introduce" component={Introduce} />
        <Route path="/building" component={Building} />
        <Route path="/mypage" component={MyPage} />
        <Route path="/admin" component={Admin} />
      </div>
    );
  }
}
