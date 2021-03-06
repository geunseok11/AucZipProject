import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import { Checkbox } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import GoogleSignup from "./googleSignup.js";
import Slide from "@material-ui/core/Slide";
import axios from 'axios';
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  modalBody: {},
  button: {
    "&:hover": {
      background: "#68DCDC",
      color: "black",
    },
    color: "white",
    background: "none",
    fontSize: "2.1rem",
    marginLeft: "2rem",
  },
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
  table: {
    color: "black",
    width: "90%",
    border: "3px dotted #ED8DB7",
  },
}));

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

const Signup = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [transition, setTransition] = React.useState(undefined);;

  const [userInfo, setUserInfo] = useState({
    memberId: "",
    name: "",
    email: "",
    password: "",
    rePassword: "",
    phone: "",
    address: "",
  });

  const [isAllow, setIsAllow] = useState(false);

  const handleInputValue = (key) => (e) => {
    setUserInfo({ ...userInfo, [key]: e.target.value });
    console.log(userInfo);
  };

  const handleIsAllow = () => {
    setIsAllow(!isAllow);
    if (isAllow) {
    }
  };

  const handleClick = (Transition) => () => {
    setTransition(() => Transition);
    setOpen(true);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (Transition) => () =>  {
    setTransition(() => Transition);
    const apiUrl = "http://54.180.105.165:3040";
    // const aa ="http://ec2-54-180-105-165.ap-northeast-2.compute.amazonaws.com:3040/user/signin";
    axios.post(apiUrl + "/user/signup", userInfo)
    .then((data) => {
      if (data.status === 200) {
        alert("가입되었습니다");
        handleClose();
        //props.history.push("/");
      } else {
        alert("입력정보가 옳바르지 않습니다");
      }
    })
    .catch((e) => console.log(e, "err"));
  };
  return (
    <div>
      <Button className={classes.button} onClick={handleOpen}>
      회원가입
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
      <div>
            <div class="modal-dialog" 
             style={{
              width: "500px",
              height: "650px",
              display: "flex",
              justifyContent: "center",
            }}>
              <div class="modal-content">
                {/* <div class="modal-header">
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <h4 class="modal-title" id="myModalLabel">
                    회원가입
                  </h4>
                </div> */}
                <div class="modal-body">
                  {/* ID */}
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
                  {/* Password */}
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
                  {/* Password 확인 */}
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
                    label="Password 확인"
                    type="password"
                    name="rePassword"
                    onChange={handleInputValue("rePassword")}
                  />
                  <br />
                  {/* Name */}
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
                    label="Name"
                    type="text"
                    name="name"
                    onChange={handleInputValue("name")}
                  />
                  <br />
                  {/* Email */}
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
                    label="Email"
                    type="email"
                    name="email"
                    onChange={handleInputValue("email")}
                  />
                  <br />
                  {/* Phone */}
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
                    label="Phone"
                    type="text"
                    name="phone"
                    onChange={handleInputValue("phone")}
                  />
                  <br />
                  {/* Address : Advanced */}
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
                    label="Address"
                    type="text"
                    name="address"
                    onChange={handleInputValue("address")}
                  />
                  <br />
                </div>
                <div>
                  {/* 개인정보 수집 동의 */}
                  <table className={classes.table}>
                    <tr>
                      <th>[필수] 개인정보 수집 및 이용 동의</th>
                    </tr>
                    <tr>
                      <td>
                        1. 목적 : 회원의 개인 식별, 상품 투자 내역 관리, 본인
                        인증 등 서비스 제공에 관련한 목적으로 개인정보를
                        처리합니다.
                      </td>
                    </tr>
                    <tr>
                      <td>2. 개인정보의 항목 : 성명, 이메일, </td>
                    </tr>
                    <tr>
                      <td>
                        3. 개인정보의 보유 및 이용 기간 : 회원 탈퇴 시까지 보유
                      </td>
                    </tr>
                    <tr>
                      <Checkbox
                        checked={isAllow}
                        onChange={handleIsAllow}
                      ></Checkbox>
                      <td>동의</td>
                    </tr>
                  </table>
                  {/* <div>Sign in with Google</div> */}
                  <GoogleSignup handleClose={handleClose.bind(this)} />
                </div>
                <div class="modal-footer">
                  <button
                  type="button"
                  class="btn btn-default"
                  data-dismiss="modal"
                  onClick={handleClose}
                  >
                    취소
                  </button>

                  <button
                    class="btn btn-primary"
                    onClick={handleSubmit(TransitionUp)}
                    // onClick={handleClick(TransitionUp)}
                    disabled={isAllow ? "" : "disabled"}
                  >
                    회원 가입
                  </button>
                </div>
              </div>
            </div>
   
        </div>
        </Modal>
    </div>
  );
};

export default Signup;
