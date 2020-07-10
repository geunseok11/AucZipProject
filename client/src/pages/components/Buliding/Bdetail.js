import React, { useState, useEffect } from "react";
import { fakedata } from "./fakedata";
import TextField from "@material-ui/core/TextField";
import "./B01.css"
import { makeStyles } from "@material-ui/core/styles";
import Invest from './invest'
import axios from "axios";
// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(1),
//     },
//   },
//   modalDialog: {
//     backgroundColor: "#121C48",
//   },
//   modalHeader: {
//     backgroundColor: "#121C48",
//   },
//   modalBody: {},
//   button: {
//     "&:hover": {
//       background: "#68DCDC",
//       color: "black",
//     },
//     color: "white",
//     background: "none",
//     fontSize: "2.1rem",
//     marginLeft: "1rem",
//   },
//   inputRoot: {
//     fontSize: "2rem",
//   },
//   labelRoot: {
//     fontSize: 30,
//     color: "#121C48",
//     "&$labelFocused": {
//       color: "#ED8DB7",
//     },
//   },
//   labelFocused: {},
// }));

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

const Bdetil  = ({match}) => {
  const [currentBuilding, setCurrentBuilding] = useState(fakedata[0]);
  const [width, setWidth] = useState('0%');
  const [calPercent, setCalPercent] = useState(0);
    // this.state = {
    //   currentBuilding: fakedata[0],
    //   // buildings: fakedata,
    //   width: String(this.calPercent) + '%'
  // calPercent = fakedata[0].invest / fakedata[0].evaluation
  console.log(match.params.id, 'match')
  useEffect(() => {
    axios.get('http://54.180.105.165:3040/building/info')
      .then((result) => {
        console.log(result.data)
        const curr = result.data.filter(ele => ele.id == match.params.id)[0]
        if(curr){
          setCurrentBuilding(curr)
          if(!curr.b_invest)curr.b_invest=0;
          setWidth( String((curr.b_invest*100/curr.b_invest_goal).toFixed (2))+'%' )
        }
        console.log(curr.b_invest, curr.b_invest_goal, 'curr data')
      });
  }, []);
  //currentBuilding.imageUrl
  return(
    <div style={{display:"flex", justifyContent:"center"}}>
    <div>
     <img 
    src={ currentBuilding.image } width="400px"></img>
    {/* <iframe 
    src={`${currentBuilding.imageUrl}`}
      >

    </iframe> */}
    <div class="graph">
  <strong class="bar" style={graph, bar, span, {width: `${width}`}} >{width}</strong>
    </div>
    <Invest />
        <div>사용용도 {currentBuilding.b_use}</div>
        <div>주소 {currentBuilding.b_location}</div>
        <div>{currentBuilding.b_size}</div>
        <div>가격 {currentBuilding.b_evaluation}</div>
        <div>기간 {currentBuilding.b_due}</div>
        <div>{currentBuilding.b_views} views</div>

        </div>
     </div>
  )

}
{/* <div>사용용도 {currentBuilding.use}</div>
<div>주소 {currentBuilding.location}</div>
<div>{currentBuilding.size}</div>
<div>가격 {currentBuilding.evaluation}</div>
<div>기간 {currentBuilding.due}</div>
<div>{currentBuilding.views} views</div> */}
export default Bdetil;