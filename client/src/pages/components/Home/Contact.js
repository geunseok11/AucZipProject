import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    width: "30%",
    margin: "1rem",
    borderStyle: "dashed",
    borderColor: "#68DBDB",
  },
  title: {
    color: "#ED8DB7",
    fontSize: "3rem",
  },
  body: {
    color: "white",
    background: "#121C48",
    fontSize: "2.2rem",
    paddingLeft: "3rem",
  },
  icon: {
    fontSize: "3rem",
  },
});

const Contact = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title}>Contact</Typography>
      <Typography className={classes.body}>
        <PeopleAltIcon className={classes.icon} />
        (주)우아한 아재들
      </Typography>
      <Typography className={classes.body}>
        <PhoneIcon className={classes.icon} />
        +82 0101234345
      </Typography>
      <Typography className={classes.body}>
        <MailIcon className={classes.icon} />
        eleganceAZ@gmail.com
      </Typography>
    </div>
  );
};

export default Contact;
