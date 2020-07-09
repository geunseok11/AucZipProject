import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import ChangePW from "./ChangePW";
import Deposit from "./Deposit";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
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
}));

const MyInfo = (props) => {
  const userInfo = props;

  return (
    <div>
      <TextField
        label="Name"
        type="text"
        name="name"
        defaultValue={userInfo.name}
      />
      <br />
      <TextField
        label="ID"
        type="text"
        name="memberId"
        defaultValue={userInfo.memberId}
      />
      <br />
      <TextField
        label="Email"
        type="email"
        name="email"
        defaultValue={userInfo.email}
      />
      <br />
      <TextField
        label="Password"
        type="password"
        name="password"
        defaultValue={userInfo.password}
      />
      <ChangePW /> <br />
      <TextField
        label="Phone"
        type="text"
        name="phone"
        defaultValue={userInfo.phone}
      />
      <br />
      {/* <TextField label="deposit" type="text" name="deposit" defaultValue={userInfo.deposit} /><Deposit /> */}
      <br />
    </div>
  );
};

export default MyInfo;
