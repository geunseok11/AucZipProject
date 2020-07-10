import React, { Component } from "react";
import { fakedata } from "./fakedata";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 375,
    maxHeight: "100%",
    float: "left",
  },
});

const BuildingItem = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.building.b_location}
          height="140"
          image={`${props.building.image}`}
          title={props.building.b_location}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">
            {props.building.b_location}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <div>{props.building.id}</div>
            <div>{props.building.b_use}</div>
            <div onClick={() => props.handleBuildingTitleClick(props.building)}>
              {props.building.b_evaluation}
            </div>
            <div>{props.building.b_location}</div>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions></CardActions>
    </Card>
  );
};

export default BuildingItem;
