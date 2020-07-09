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
    <Link to={"/" + props.building.URL}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={props.building.location}
            height="140"
            image={`${props.building.imageUrl}`}
            title={props.building.location}
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="h2">
              {props.building.location}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <div>{props.building.casenum}</div>
              <div>{props.building.use}</div>
              <div
                onClick={() => props.handleBuildingTitleClick(props.building)}
              >
                {props.building.evaluation}
              </div>
              <div>{props.building.location}</div>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions></CardActions>
      </Card>
    </Link>
  );
};

export default BuildingItem;
