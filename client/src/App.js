import React from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import Signup from './App_component/Signup';
import Building from './pages/buildingList'
import Button from '@material-ui/core/Button';

class App extends React.Component {
  state = {
    isLogin: false,
    userInfo: {
      username: "",
      email: "",
      password: "",
      mobile: "",
      address: ""
    }
  }

  handleUserinfo = (data) => {
    this.setState({
      userinfo: {
        username: data.username,
        email: data.email,
        password: data.password,
        mobile: data.mobile,
        address: data.address
      },
    });
  };

  handleLogin = () => {
    this.setState({
      isLogin: true,
    });
  };
  
  
  
  render(){
    const {isLogin, userInfo, handleLogin, handleUserinfo} = this.state;
  return (
    <div className="App">
        <div>
        <Button variant="contained" color="primary">
             서비스 소개
          </Button>
          <Button variant="contained" color="primary" onClick="">
             투자 정보
          </Button>
          {/* <Link to="/buildingList"></Link> */}
          {/* <Switch>
          <Route
            exact
            path="/buildingList"
            render={() => <Building isLogin={isLogin} userInfo={userInfo}/>}
          />
          </Switch> */}
          <Signup />
          
          <Button variant="contained" color="primary" isLogin={isLogin} 
                handleLogin={this.handleLogin.bind(this)}
                handleUserinfo={this.handleUserinfo.bind(this)}>
             로그인
          </Button>
        </div>
        <div>building</div>
        <div>news</div>
        <div>contact</div>
      </div>
      
      
    );
  }
}

export default App;
