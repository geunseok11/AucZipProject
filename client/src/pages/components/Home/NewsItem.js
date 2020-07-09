import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const NewsItem = ({ title, day, descriptionUrl, imageUrl, text }) => {
  const classes = useStyles();

  return (
    <Link href={descriptionUrl} target="_blank">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={title}
            height="140"
            image={imageUrl}
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {text}/{day}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions></CardActions>
      </Card>
    </Link>
  );
};

export default NewsItem;
