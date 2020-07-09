import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Checkbox } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import Slide from "@material-ui/core/Slide";

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
  const [transition, setTransition] = React.useState(undefined);

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

  return (
    <div>
      <span>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          id="modalTest"
          data-toggle="modal"
          data-target="#signup"
        >
          회원가입
        </Button>

        <form
          onSubmit={(e) => {
            console.log(userInfo, "userInfo");
            e.preventDefault();
            // fetch("http://54.180.105.165:3040/user/signup", {
            fetch("http://localhost:3040/user/signup", {
              method: "POST",
              body: JSON.stringify(userInfo),
              headers: {
                "Content-Type": "application/json",
              },
            })
              .then((data) => {
                if (data.status === 200) {
                  alert("가입되었습니다");
                  //props.history.push("/");
                } else {
                  alert("입력정보가 옳바르지 않습니다");
                }
              })
              .catch((e) => console.log(e, "err"));
          }}
        >
          <div
            class="modal fade"
            id="signup"
            tabindex="-1"
            role="dialog"
            aria-labelledby="myModalLabel"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
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
                </div>
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
                  <div>Sign in with Google</div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-default"
                    data-dismiss="modal"
                  >
                    취소
                  </button>

                  <button
                    type="submit"
                    class="btn btn-primary"
                    type="submit"
                    onClick={handleClick(TransitionUp)}
                    disabled={isAllow ? "" : "disabled"}
                  >
                    회원 가입
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </span>
    </div>
  );
};

export default Signup;
