import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default class MyPage extends Component {
  render(props){
  if(props.isLogin){
    return(
        <div>
        <h1>Mypage</h1>
            <TextField label="이름" type="text" name="username" defaultValue={props.userInfo.username} /><br/>

            <TextField label="id" type="text" name="id" defaultValue={props.userInfo.id}/><br/>

            <TextField label="email" type="email" name="email" defaultValue={props.userInfo.email} /><br/>

            <TextField label="password" type="password" name="password" defaultValue={props.userInfo.password} /><br/>

            <TextField label="mobile" type="text" name="mobile" defaultValue={props.userInfo.mobile} /><br/>

            <TextField label="address" type="text" name="address" defaultValue={props.userInfo.address}/><br/>
        </div>      
    )
  }else{
    return (
    <div>
      <h1>NOT FOUND</h1>
    </div>
    )
  }
  }
     
  }