import React, { Component } from 'react'

import TextField from '@material-ui/core/TextField';
import ChangePW from './ChangePW';
import Deposit from './Deposit';

export default class MyInfo extends Component {
  
  redner(props) {
    return (
      <div>

      
      <TextField label="이름" type="text" name="username" defaultValue={props.userInfo.username} /><br/>

<TextField label="id" type="text" name="id" defaultValue={props.userInfo.id}/><br/>

<TextField label="email" type="email" name="email" defaultValue={props.userInfo.email} /><br/>

<TextField label="password" type="password" name="password" defaultValue={props.userInfo.password} /> 
<ChangePW /> <br/>

<TextField label="mobile" type="text" name="mobile" defaultValue={props.userInfo.mobile} /><br/>

<TextField label="deposit" type="text" name="deposit" defaultValue={props.userInfo.deposit} /><Deposit />
 <br/>
 </div>
    )
  }
}