import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from '@material-ui/core/TextField';

const styles = (theme) => ({
  hidden: {
    display: "none",
  },
});

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      rePaassword: "",
      name: "",
      email: "",
      phone: "",
      open: false,
    };
    this.handleInputValue = this.handleInputValue.bind(this);
  }
  handleInputValue = key => e => {
    this.setState({ [key]: e.target.value });
  };
  render() {
    return (
      <div>
        <span>
       
       <Button variant="contained" color="primary" id="modalTest" data-toggle="modal" data-target="#signup">
             회원가입
          </Button>
       
          <form
            onSubmit={e => {
              e.preventDefault();
              fetch('http://localhost:3000/Signup',{
                method : 'POST',
                body: JSON.stringify(this.state),
                  headers: {
                    'Content-Type': 'application/json',
                  },
              })
              .then( data => {
                if (data.status === 201) {
                  alert('가입되었습니다');
                  
                  this.props.history.push('/');
                } else {
                  alert('입력정보가 옳바르지 않습니다');
                  
                }
              })
              
            }}
          >
      <div class="modal fade" id="signup" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title" id="myModalLabel">회원가입</h4>
            </div>
            <div class="modal-body">
            <TextField label="이름" type="text" name="username" onChange={this.handleInputValue("username")} /><br/>

            <TextField label="email" type="email" name="email" onChange={this.handleInputValue("email")} /><br/>

            <TextField label="password" type="password" name="password" onChange={this.handleInputValue("password")} /><br/>

            <TextField label="password확인" type="password" name="password" onChange={this.handleInputValue("password")} /><br/>

            <TextField label="mobile" type="text" name="mobile" onChange={this.handleInputValue("mobile")} /><br/>

            <TextField label="address" type="text" name="address" onChange={this.handleInputValue("address")} /><br/>

           
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">취소</button>
              <button type="submit" class="btn btn-primary" type="submit">완료</button>
            </div>
          </div>
        </div>
      </div>
     </form>
     
      </span>
        <div>
          <table>
            <tr>
              <th>[필수] 개인정보 수집 및 이용 동의</th>
            </tr>
            <tr>
              <td>
                1. 목적 : 회원의 개인 식별, 상품 투자 내역 관리, 본인 인증 등
                서비스 제공에 관련한 목적으로 개인정보를 처리합니다.
              </td>
              <td>2. 개인정보의 항목 : 성명, 이메일, </td>
              <td>3. 개인정보의 보유 및 이용 기간 : 회원 탈퇴 시까지 보유</td>
            </tr>
            <tr>
              <td>동의</td>
            </tr>
          </table>
          <div>Sign in with Google</div>
        </div>
      </div>
    );
  }
}
