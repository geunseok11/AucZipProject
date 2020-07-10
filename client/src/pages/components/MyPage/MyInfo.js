import React, { useState, useEffect  } from 'react'

import TextField from '@material-ui/core/TextField';
import ChangePW from './ChangePW';
import Deposit from './Deposit';
import axios from 'axios';
import { Container } from '@material-ui/core';
import Box from '@material-ui/core/Box';

const MyInfo = (props) => {
  
  // const userInfo = props
  const [userInfo, setuserInfo] = useState([])

useEffect(() => {
  axios.get("http://54.180.105.165:3040/user/info")
    .then((result) => {
      setuserInfo(result.data)
      console.log(result.data, 'data')
    });
}, []);

  return(
      <div>
        <Box bgcolor="primary.dark" color="primary.contrastText"p={2} m={1} width="500px">NAME : {userInfo? userInfo.name: ''}</Box>
        <Box bgcolor="primary.dark" color="primary.contrastText"p={2} m={1} width="500px">ID   : {userInfo? userInfo.id: ''}</Box>
        <Box bgcolor="primary.dark" color="primary.contrastText"p={2} m={1} width="500px">PASSWORD : {userInfo? userInfo.password: ''}</Box><ChangePW /> <br />
        <Box bgcolor="primary.dark" color="primary.contrastText"p={2} m={1} width="500px">PHONE : {userInfo? userInfo.phone: ''}</Box>
        <Box bgcolor="primary.dark" color="primary.contrastText"p={2} m={1} width="500px">MONEY : {userInfo? userInfo.money: ''}</Box>
        

     
      <Deposit />
      <br />
    </div>
  );
};

export default MyInfo;
