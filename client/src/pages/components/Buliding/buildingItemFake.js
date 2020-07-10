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

const BuildingItemFake = (props) => {
  const classes = useStyles();

  return (
    <Link to={"/" + fakedata[0].URL}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={fakedata[0].location}
            height="140"
            image={fakedata[0].imageUrl}
            title={fakedata[0].location}
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="h2">
              {fakedata[0].location}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <div>{fakedata[0].use}</div>
              <div onClick={() => props.handleBuildingTitleClick(fakedata[0])}>
                {fakedata[0].evaluation}
              </div>
              <div>{fakedata[0].location}</div>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions></CardActions>
      </Card>
    </Link>
  );
};

export default BuildingItemFake;
