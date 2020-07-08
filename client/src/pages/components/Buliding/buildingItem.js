import React, { Component } from 'react';
import { fakedata } from "./fakedata";
import { BrowserRouter,Route, Link,Switch } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
  },
  tableHeader: {
    fontSize: "2rem",
    textAlign: "center",
  },
});

const BuildingItem = (props) => {
  const classes = useStyles();

  return(
  // <div>

  //      <iframe 
  //       src={`${props.building.imageUrl}`}
  //       onClick={() => props.handleBuildingTitleClick(props.building)}
  //         >

  //       </iframe>
  //           <Link to ={'/'+props.building.URL}
  //           onClick={() => props.handleBuildingTitleClick(props.building)}
  //           >{props.building.casenum}</Link>
  //           {console.log(props.building)}
  //           <div>{props.building.use}</div>
  //           <div onClick={() => props.handleBuildingTitleClick(props.building)}>{props.building.evaluation}</div>
  //           <div>{props.building.location}</div>

  //         </div>
  <Card className={classes.root}>
      <Link to={'/'+props.building.URL}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={`${props.building.imageUrl}`}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <div>{props.building.casenum}</div>
          <div>{props.building.use}</div>
            <div onClick={() => props.handleBuildingTitleClick(props.building)}>{props.building.evaluation}</div>
           <div>{props.building.location}</div>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions></CardActions>
      </Link>
    </Card>

  )
};

export default BuildingItem;  