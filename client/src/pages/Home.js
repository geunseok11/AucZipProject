import React, { Component } from "react";

import Menu from "./components/Menu/Menu";
import SignIn from "./components/Menu/Signin";
import SignUp from "./components/Menu/Signup";
import BuildingProducts from "./components/Index/BuildingProducts";
import News from "./components/Index/News";
import Contact from "./components/Index/Contact";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClickOpen() {
    this.setState({
      open: true,
    });
  }

  handleClose() {
    this.setState({
      open: false,
    });
  }

  render() {
    return (
      <div>
        <Menu />
        <SignIn onClose />
        <SignUp />
        <BuildingProducts />
        <News />
        <Contact />
      </div>
    );
  }
}
