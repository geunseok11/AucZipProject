import React, { Component } from "react";

export default class SignIn extends Component {
  render() {
    return (
      <div>
        <div>이미지</div>
        <input type="text" placeholder="아이디" />
        <input type="text" placeholder="비밀번호" />
        <button>회원가입</button>
        <button>로그인</button>
        <div>Sign in with Google</div>
      </div>
    );
  }
}
