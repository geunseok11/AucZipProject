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
        <BuildingProducts />
        <hr />
        <News />
        <hr />
        <Contact />
        <hr />
      </div>
    );
  }
}
