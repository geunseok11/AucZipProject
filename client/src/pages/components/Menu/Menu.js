import React, { useState } from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

import titleImage from "./AupZip_title_107x41.png";
import Signin from "./Signin";
import Signup from "./Signup";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolBar: {
    backgroundColor: "#121C48",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  button: {
    "&:hover": {
      background: "#68DCDC",
      color: "black",
    },
    fontSize: "2.1rem",
    marginLeft: "2rem",
  },
  link: {
    textDecoration: "none",
    color: "white",
    hover: {
      color: "black",
    },
  },
}));

const Menu = () => {
  const classes = useStyles();

  const [isLogin, setIsLogin] = useState(false);

  const handleIsLogin = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolBar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <Link to="/">
              <img src={titleImage} />
            </Link>
          </IconButton>
          <Typography variant="h4" className={classes.title}></Typography>
          <Button className={classes.button} color="inherit">
            <Link className={classes.link} to="/introduce">
              서비스 소개
            </Link>
          </Button>
          <Button className={classes.button} color="inherit">
            <Link className={classes.link} to="building">
              투자 상품
            </Link>
          </Button>
          {isLogin ? (
            <Button className={classes.button} color="inherit">
              <Link className={classes.link} to="mypage">
                마이페이지
              </Link>
            </Button>
          ) : (
            <Signup handleIsLogin={handleIsLogin} />
          )}
          {isLogin ? (
            <Button
              className={classes.button}
              color="inherit"
              onClick={handleIsLogin}
            >
              로그아웃
            </Button>
          ) : (
            <Signin handleIsLogin={handleIsLogin} />
          )}

          {/* <Signup isLogin={handleIsLogin} />
          <Signin isLogin={handleIsLogin} /> */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Menu;
