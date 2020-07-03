import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      id:"",
      password: ''
    };
    this.handleInputValue = this.handleInputValue.bind(this);
  }
  handleInputValue = key => e => {
    this.setState({ [key]: e.target.value });
  };
  
  render() {
    return (
      <span>
      <Button variant="contained" color="primary" id="modalTest" data-toggle="modal" data-target="#login">
             로그인
          </Button>
          <form
            onSubmit={e => {
              e.preventDefault();
              fetch('http://localhost:3000/login',{
                method : 'POST',
                body: JSON.stringify(this.state),
                  headers: {
                    'Content-Type': 'application/json',
                  },
              })
              .then( data => {
                if (data.status === 200) {
                  alert('로그인에 성공하셨습니다');

                  this.props.isLogin = true;
                  this.props.handleLogin(this.props.isLogin);
                  this.props.handleUserinfo(data);
                } else {
                  alert('로그인 실패하였습니다');

                }
              })
             
            }}
          >
          <div class="modal fade" id="login" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title" id="myModalLabel">로그인</h4>
            </div>
            <div class="modal-body">

            <TextField label="email" type="email" name="email" onChange={this.handleInputValue("email")} /><br/>

            <TextField label="id" type="text" name="id" onChange={this.handleInputValue("id")} /><br/>

            <TextField label="password" type="password" name="password" onChange={this.handleInputValue("password")} /><br/>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">취소</button>
              <button type="submit" class="btn btn-primary" type="submit">로그인</button>
            </div>
          </div>
        </div>
      </div>
      </form>
      <div>sign in Google</div>
    </span>
    );
  }
}
