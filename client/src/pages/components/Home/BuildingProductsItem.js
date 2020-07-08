import React from "react";
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
    maxWidth: 345,
  },
});

const BuildingProductsItem = (props) => {
  console.log(props)
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Link to='/01'>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            contents contents contents contents contents contents contents
            contents contents contents contents contents contents contents
            contents contents contents contents contents contents contents
            contents contents contents
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions></CardActions>
      </Link>
    </Card>
  );
};

export default BuildingProductsItem;
