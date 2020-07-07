import React, { Component } from 'react';
import { fakedata } from "./fakedata";
import { BrowserRouter,Route, Link,Switch } from "react-router-dom";
import BuildingInfo from "./buildingInfo"

const BuildingItem = (props) => (
  <div>

       <iframe 
        src={`${props.building.imageUrl}`}
        onClick={() => props.handleBuildingTitleClick(props.building)}
          >

        </iframe>
            <Link to ='/BuildingInfo'
            onClick={() => props.handleBuildingTitleClick(props.building)}
            render={() => <BuildingInfo building={props.building}/>}
            >{props.building.casenum}</Link>
            {console.log(props.building)}
            <div>{props.building.use}</div>
            <div onClick={() => props.handleBuildingTitleClick(props.building)}>{props.building.evaluation}</div>
            <div>{props.building.location}</div>

          </div>
);

export default BuildingItem;  