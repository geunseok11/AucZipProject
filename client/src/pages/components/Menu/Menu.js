import React, { Component } from "react";
import SignIn from "./Signin";
import SignUp from "./Signup";

export default class Menu extends Component {
  redner() {
    return (
      <div>
        <form>
          <button class="introduce">서비스 소개</button>
          <button class="invest_product">투자 상품</button>
          <SignIn />
          <SignUp />
        </form>
      </div>
    );
  }
}
