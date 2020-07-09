import React, { Component } from "react";
import BuildingList from "./components/Buliding/buildingList";
import { fakedata } from "./components/Buliding/fakedata";
import { Route } from "react-router-dom";
import axios from 'axios';

export default class Building extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentBuilding: null,
      buildings: fakedata
    }
    this.handleBuildingTitleClick=this.handleBuildingTitleClick.bind(this)
  }
  componentDidMount() {
    axios.defaults.withCredentials = true
    axios
      .get('http://54.180.105.165:3040/building/info')
      .then((result) => {
        console.log(result.data, 'get data')
        this.setState({ buildings: result.data }) 
      });

    // searchYouTube({query: "surfing",max: 4,key: this.props.YOUTUBE_API_KEY},
    //   (data) =>{
    //     // console.log(data, 'data??????')
    //     this.setState({ videos: data, currentVideo: data[3] }) 
    //     console.log('data??????',data[0].snippet.thumbnails)
    //   }
    // );
    // this.setState({time: new Date})
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
