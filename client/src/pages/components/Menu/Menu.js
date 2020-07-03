import React, { Component } from "react";

export default class Menu extends Component {
  redner() {
    return (
      <div>
        <form>
          <button class="introduce">서비스 소개</button>
          <button class="invest_product">투자 상품</button>
          <button class="signup">회원가입</button>
          <button class="signin">로그인</button>
        </form>
      </div>
    );
  }
}
