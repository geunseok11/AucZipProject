import React from "react";
import { Link, Route, withRouter } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    button: {
      "&:hover": {
        background: "#68DCDC",
        color: "black",
      },
      color: "black",
      background: "none",
      fontSize: "2.1rem",
      marginLeft: "1rem",
    },
  }));
  let buildingInfo = {money:100000, id:9}
  const handleSubmit = () => {
    const apiUrl =
      process.env.NODE_ENV === "production"
        ? "http://ec2-54-180-105-165.ap-northeast-2.compute.amazonaws.com:3040"
        : "http://localhost:3040";
    axios.defaults.withCredentials = true
    axios.post(apiUrl + "/building/invest", buildingInfo).then((data) => {
      console.log(data, "data");
      if (data.status === 200) {
        alert("로그인에 성공하셨습니다");

      } else {
        alert("로그인 실패하였습니다");
        // props.history.push('/');
      }
    });
}

const Invest = (props) => {
    //props 로 값을 받아서 보냄
    const classes = useStyles();
    return (
    <Button className={classes.button} onClick={handleSubmit}>
    투자하기
    </Button>
    );

};

export default Invest;