import React, { Component } from "react";

// import Menu from "./components/Menu/Menu";
// import SignIn from "./components/Menu/Signin";
// import SignUp from "./components/Menu/Signup";
// import BuildingProducts from "./components/Home/BuildingProducts";
// import News from "./components/Home/News";
// import Contact from "./components/Home/Contact";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  render() {
    return (
      <div>
        <h1>HAHA</h1>
      </div>
    );
  }
}
