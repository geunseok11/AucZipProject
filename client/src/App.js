import React, { useState } from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";

import Home from "./pages/Home";
import Introduce from "./pages/Introduce";
import MyPage from "./pages/MyPage";
import Building from "./pages/Building";
import Admin from "./pages/Admin";
import Menu from "./pages/components/Menu/Menu";
import B01 from "./pages/components/Buliding/B01";
import B02 from "./pages/components/Buliding/B02";
import B03 from "./pages/components/Buliding/B03";
import B04 from "./pages/components/Buliding/B04";
import B05 from "./pages/components/Buliding/B05";

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

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const handleIsLogin = () => {
    setIsLogin(!isLogin);
  };

  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    mobile: "",
  });

  return (
    <backGroundDiv className="App">
      <Menu isLogin={isLogin} handleIsLogin={handleIsLogin} />
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/introduce" render={() => <Introduce />} />
      <Route exact path="/building" render={() => <Building />} />
      <Route exact path="/mypage" render={() => <MyPage isLogin={isLogin} />} />
      <Route exact path="/admin" render={() => <Admin />} />
      <Route
        exact
        path="/signup"
        render={() => (
          <Signup
            isLogin={isLogin}
            // url="http://54.180.105.165:3040/user/signup"
            url="localhost/user/signup"
          />
        )}
      />
      <Route exact path="/B01" render={() => <B01 />} />
      <Route exact path="/B02" render={() => <B02 />} />
      <Route exact path="/B03" render={() => <B03 />} />
      <Route exact path="/B04" render={() => <B04 />} />
      <Route exact path="/B05" render={() => <B05 />} />
    </backGroundDiv>
  );
};

export default App;
