import React, { useState } from "react";
import { Link, Route, withRouter } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    button: {
      "&:hover": {
        background: "#68DCDC",
        color: "black",
      },
      color: "black",
      background: "none",
      fontSize: "1.5rem",
      // marginLeft: "1rem",
    },
    inputRoot: {
      fontSize: "1.2rem",
    },
    labelRoot: {
      fontSize: "1.2rem",
      color: "#121C48",
      "&$labelFocused": {
        color: "#ED8DB7",
      },
    },
  }));
  

const Invest = (props) => {
    //props 로 값을 받아서 보냄
    const classes = useStyles();
    let buildingInfo = {money:100000, id:9}
  const [userInfo, setUserInfo] = useState({
    money: 0,
  });
  const handleInputValue = (key) => (e) => {
    setUserInfo({ ...userInfo, [key]: e.target.value });
  };
  const handleSubmit = () => {
    const apiUrl = "http://54.180.105.165:3040";

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

    return (
      <div  class="modal-content" style={{ width: "400px" }}>
      <div style={{
              display: "flex",
              justifyContent: "left",
              alignItems: "bottom"
            }}>
        <TextField
          InputProps={{
            classes: {
              root: classes.inputRoot,
            },
          }}
          InputLabelProps={{
            classes: {
              root: classes.labelRoot,
              focused: classes.labelFocused,
            },
          }}
          label="money"
          type="number"
          name="money"
          onChange={handleInputValue("money")}
        />
        <div style={{
          display:"flex",
          width:"50px", height:"50px", marginTop:"20px"
        }}>원
          </div>
      </div>
      <div class="modal-footer" style={{
          marginTop:"-10px", 
          padding: "5px"
        }}>
        <Button className={classes.button} onClick={handleSubmit}>
    투자하기
    </Button>
      </div>

    </div>

    );

};

export default Invest;