import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

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
          <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#service">
          서비스 소개
          </button>
          <button type="button" >
          투자 정보
          </button>
          <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#signup">
          회원가입
          </button>
          <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#login">
          로그인
          </button>
        </div>
      </div>
      
    );
  }
}

export default App;
