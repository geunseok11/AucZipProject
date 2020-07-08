import React, { Component } from "react";
import BuildingList from "./components/Buliding/buildingList";
import { fakedata } from "./components/Buliding/fakedata";
import { Route } from "react-router-dom";


export default class Building extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentBuilding: null,
      buildings: fakedata
    }
    this.handleBuildingTitleClick=this.handleBuildingTitleClick.bind(this)
  }
  handleBuildingTitleClick(building) {
    this.setState({
      currentBuilding: building
    });
  }

  render(){

    return( 
    <div>

      <BuildingList 
      buildings={this.state.buildings} 
      handleBuildingTitleClick={this.handleBuildingTitleClick}
      />

    </div>
    )
  }
}
