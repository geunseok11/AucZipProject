import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import BuildingItem from "./buildingItem"

const BuildingList = (props) => (
  <div>

    {props.buildings.map((data) => {
      return(
      <BuildingItem
        building = {data}
        key = {data.casenum}
      handleBuildingTitleClick = {props.handleBuildingTitleClick}
      />
      )}
    )}
  </div>
);



export default BuildingList;
