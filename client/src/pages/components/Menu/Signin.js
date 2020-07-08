import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import GoogleSignin from "./googleSignin.js";
import axios from "axios";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  button: {
    "&:hover": {
      background: "#68DCDC",
      color: "black",
    },
    color: "white",
    background: "none",
    fontSize: "2.1rem",
    marginLeft: "1rem",
  },
  modalDialog: {
    backgroundColor: "#121C48",
  },
  modalHeader: {
    backgroundColor: "#121C48",
  },
  modalBody: {},
  inputRoot: {
    fontSize: "2rem",
  },
  labelRoot: {
    fontSize: 30,
    color: "#121C48",
    "&$labelFocused": {
      color: "#ED8DB7",
    },
  },
  labelFocused: {},
}));

function Signin(props) {
  const classes = useStyles();
  const [userInfo, setUserInfo] = useState({
    email: "",
    memberId: "",
    password: "",
  });
  const handleInputValue = (key) => (e) => {
    setUserInfo({ ...userInfo, [key]: e.target.value });
  };
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = ({ handleIsLogin }) => {
    const apiUrl =
      process.env.NODE_ENV === "production"
        ? "http://ec2-54-180-105-165.ap-northeast-2.compute.amazonaws.com:3040"
        : "http://localhost:3040";
    axios.post(apiUrl + "/user/signin", userInfo).then((data) => {
      console.log(data, "data");
      if (data.status === 200) {
        alert("로그인에 성공하셨습니다");
        handleIsLogin();
        if (data.data.memberId === "admin") {
          handleClose();
          props.history.push("/admin");
        } else {
          handleClose();
          props.history.push("/");
        }

        // console.log(props, 'porps')
        // this.props.isLogin = true;
        // this.props.handleLogin(props.isLogin);
        // this.props.handleUserinfo(data);
      } else {
        alert("로그인 실패하였습니다");
        // props.history.push('/');
      }
    });

    // e.preventDefault();
    // fetch("http://localhost:3040/user/signin", {
    //   method: "POST",
    //   body: JSON.stringify(userInfo),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // }).then((data) => {
    //   console.log(data, 'data')
    //   if (data.status === 200) {
    //     // alert("로그인에 성공하셨습니다");
    //     props.history.push('/');
    //     // console.log(props, 'porps')
    //     // this.props.isLogin = true;
    //     // this.props.handleLogin(props.isLogin);
    //     // this.props.handleUserinfo(data);
    //     handleClose()
    //   } else {
    //     alert("로그인 실패하였습니다");
    //     // props.history.push('/');
    //   }
    // });
  };
  // const body = (
  //   // <div style={modalStyle} className={classes.paper}>
  //   //   <h2 id="simple-modal-title">Text in a modal</h2>
  //   //   <p id="simple-modal-description">
  //   //     Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
  //   //   </p>

  //   // </div>

  // );

  return (
    <div>
      {/* <div className={classes.root}></div> */}
      <Button className={classes.button} onClick={handleOpen}>
        로그인
      </Button>
      {/* <button type="button" onClick={handleOpen} className={classes.button}>
        로그인
      </button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {/* {body} */}
        <div>
          e.preventDefault();
          {/* <div class="modal-dialog" style={{width:"400px"}} > */}
          <div
            class="modal-dialog"
            style={{
              width: "500px",
              height: "250px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div class="modal-content" style={{ width: "400px" }}>
              <div class="modal-body">
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
                  label="ID"
                  type="text"
                  name="memberId"
                  onChange={handleInputValue("memberId")}
                />
                <br />

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
                  label="Password"
                  type="password"
                  name="password"
                  onChange={handleInputValue("password")}
                />
                <br />
                {/* <GoogleSignin /> */}
              </div>
              <div class="modal-footer">
                <GoogleSignin handleClose={handleClose.bind(this)} />
                {/* <div>sign in Google</div> */}
                <button
                  type="button"
                  class="btn btn-default"
                  data-dismiss="modal"
                  onClick={handleClose}
                >
                  취소
                </button>
                {/* <button type="submit" class="btn btn-primary" type="submit"> */}
                <button
                  class="btn btn-primary"
                  onClick={() => handleSubmit(props)}
                >
                  로그인
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default withRouter(Signin);
