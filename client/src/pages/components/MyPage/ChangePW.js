import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
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

const ChangePW = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [transition, setTransition] = React.useState(undefined);

  const [userInfo, setUserInfo] = useState({
    password: "",
    rePassword: "",
  });

  const [isAllow, setIsAllow] = useState(false);

  const handleInputValue = (key) => (e) => {
    setUserInfo({ ...userInfo, [key]: e.target.value });
    console.log(userInfo);
  };

  const handleIsAllow = () => {
    setIsAllow(!isAllow);
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
          비밀번호 변경
        </Button>

        <form
          onSubmit={(e) => {
            console.log(userInfo, "userInfo");
            e.preventDefault();
            fetch("http://54.180.105.165:3040/user/info", {
              method: "POST",
              body: JSON.stringify(userInfo),
              headers: {
                "Content-Type": "application/json",
              },
            })
              .then((data) => {
                if (data.status === 200) {
                  alert("비밀번호가 변경 되었습니다");
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
                    비밀번호 변경
                  </h4>
                </div>
                <div class="modal-body">
                  
                
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
                    name="rePassword"
                    onChange={handleInputValue("rePassword")}
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
                  
                    {/* newPassword */}
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
                    label="newPassword"
                    type="password"
                    name="new password"
                    onChange={handleInputValue("password")}
                  />
    
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
                  >
                    비밀번호 변경
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

export default ChangePW;
