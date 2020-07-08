import React from "react";
import { fakedata } from "./fakedata";

export default class B05 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBuilding: fakedata[4],
      buildings: fakedata,
    };
  }

  render(props) {
    return (
      <div>
        <iframe src={`${this.state.currentBuilding.imageUrl}`}></iframe>
        <div>사용용도 {this.state.currentBuilding.use}</div>
        <div>주소 {this.state.currentBuilding.location}</div>
        <div>{this.state.currentBuilding.size}</div>
        <div>가격 {this.state.currentBuilding.evaluation}</div>
        <div>기간 {this.state.currentBuilding.due}</div>
        <div>{this.state.currentBuilding.views} views</div>
      </div>
    );
  }
}
