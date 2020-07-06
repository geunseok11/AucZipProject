import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";

import BuildingProducts from "./components/Home/BuildingProducts";
import News from "./components/Home/News";
import Contact from "./components/Home/Contact";

const useStyles = makeStyles({});

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  render() {
    return (
      <div>
        <h3 className>주목할 투자 상품</h3>
        <BuildingProducts />
        <hr />
        <h3>최신 부동산 소식</h3>
        <News />
        <hr />
        <Contact />
        <hr />
      </div>
    );
  }
}
