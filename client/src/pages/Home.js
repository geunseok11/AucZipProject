import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { fakedata } from "./components/Buliding/fakedata";

import BuildingProducts from "./components/Home/BuildingProducts";
import News from "./components/Home/News";
import Contact from "./components/Home/Contact";
import axios from 'axios';
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
  componentDidMount() {
    axios.defaults.withCredentials = true
    axios
      .get('http://54.180.105.165:3040/building/info')
      .then((result) => {
        this.setState({ buildings: result.data, currentBuilding: result.data[0] }) 

      });
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
          currentBuilding={this.state.currentBuilding}
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
