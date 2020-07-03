import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.props = {};
  }

  handleMenu = () => {
    if (props.isLogin) {
      return `
        <Link to="/mypage">My Page</Link>
        <button>로그아웃</button>
      `;
    } else {
      return `
        <button class="signup">회원가입</button>
        <button class="signin">로그인</button>
      `;
    }
  };

  render() {
    return (
      <div>
        <Link to="/introduce">서비스 소개</Link>
        <Link to="/building">투자 상품</Link>
        {this.handleMenu()}
      </div>
    );
  }
}
