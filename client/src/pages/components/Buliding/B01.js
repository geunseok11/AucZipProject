import React from "react";
import { fakedata } from "./fakedata";
import TextField from "@material-ui/core/TextField";
import "./B01.css"
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  modalDialog: {
    backgroundColor: "#121C48",
  },
  modalHeader: {
    backgroundColor: "#121C48",
  },
  modalBody: {},
  button: {
    "&:hover": {
      background: "#68DCDC",
      color: "black",
    },
    color: "white",
    background: "none",
    fontSize: "2.1rem",
    marginLeft: "1rem",
  },
  inputRoot: {
    fontSize: "2rem",
  },
  labelRoot: {
    fontSize: 30,
    color: "#121C48",
    "&$labelFocused": {
      color: "#ED8DB7",
    },
  },
  labelFocused: {},
}));

const graph = {
  position: 'relative',
        width: '500px',
        border: '1px solid rgb(23, 54, 131)',
        padding: '2px',
		fontSize:'11px',
		fontFamily:'tahoma',
		marginBottom:'3px'

}
const bar = {
  display: 'block',
        position: 'relative',
        background: 'rgb(12, 6, 70)', 
        textAlign: 'center',
        color: '#333',
        height: '2em', 
        lineHeight: '2em',
}
const span = {
  position: 'absolute',
   left: '1em'
}

export default class B01 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentBuilding: fakedata[0],
      buildings: fakedata,
      width: String(this.calPercent) + '%'
    }
    this.changePercent = this.changePercent.bind(this)
    }
  
  calPercent = fakedata[0].invest / fakedata[0].evaluation

  changePercent() {
    this.state = {
      width: '50%'
    }
  }

  render() {
console.log(this.state)
  return(
    <div>
    <iframe 
    src={`${this.state.currentBuilding.imageUrl}`}
      >

    </iframe>
    <div class="graph">
  <strong class="bar" style={graph, bar, span, {width: `${this.state.width}`}} >{this.state.width}</strong>
    </div>
        <div>사용용도 {this.state.currentBuilding.use}</div>
        <div>주소 {this.state.currentBuilding.location}</div>
        <div>{this.state.currentBuilding.size}</div>
        <div>가격 {this.state.currentBuilding.evaluation}</div>
        <div>기간 {this.state.currentBuilding.due}</div>
        <div>{this.state.currentBuilding.views} views</div>


     </div>
  )
  }
}

