import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import BuildingItem from "./buildingItem";
import Invest from './invest'
const BuildingList = (props) => (
  <div>
    {props.buildings.map((data) => {
      return (
        <BuildingItem
          building={data}
          key={data.id}
          handleBuildingTitleClick={props.handleBuildingTitleClick}
        />
      );
    })}
  </div>
);

export default BuildingList;
