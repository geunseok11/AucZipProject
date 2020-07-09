import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { fakedata } from "./components/Buliding/fakedata";

import BuildingProducts from "./components/Home/BuildingProducts";
import News from "./components/Home/News";
import Contact from "./components/Home/Contact";

const useStyles = makeStyles({});

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      currentBuilding: fakedata[0],
      buildings: fakedata
    };
    this.handleBuildingTitleClick=this.handleBuildingTitleClick.bind(this)
  }
  handleBuildingTitleClick(building) {
    this.setState({
      currentBuilding: building
    });
  }

  render() {
    return (
      <div>
        <BuildingProducts buildings={this.state.buildings} 
        handleBuildingTitleClick={this.handleBuildingTitleClick}
        />
        <hr />
        <News />
        <hr />
        <Contact />
        <hr />
      </div>
    );
  }
}
