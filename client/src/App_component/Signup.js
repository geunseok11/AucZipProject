import React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


export default class Signup extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      mobile: "",
      address: ""
    };
    this.handleInputValue = this.handleInputValue.bind(this);
  }
  handleInputValue = key => e => {
    this.setState({ [key]: e.target.value });
  };
    render(){
     return( 
     <span>
       <script>
         
       </script>
       <Button variant="contained" color="primary" id="modalTest" data-toggle="modal" data-target="#signup">
             회원가입
          </Button>
        {/* <button type="button" class="btn btn-primary btn-lg" id="modalTest" data-toggle="modal" data-target="#signup">
            회원가입
          </button> */}

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

              {/* <div>
              <label> Email </label>
              <input id="email" 
              onChange={this.handleInputValue('email')}></input>
              </div>
              <div>
              <label> Password </label>
              <input type="password" id="password"
              onChange={this.handleInputValue('password')}></input>
              </div>
              <div>
              <label> Password 확인 </label>
              <input type="password" id="passwordCheck"
              onChange={this.handleInputValue('password')}></input>
              </div>
              <div>
              <label> Name </label>
              <input onChange={this.handleInputValue('username')}></input>
              </div><div>
              <label> mobile </label>
              <input onChange={this.handleInputValue('mobile')}></input>
              </div>
              <div>
              <label> address </label>
              <input onChange={this.handleInputValue('address')}></input>
              </div> */}
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
      
      ) }
    
}


// var input = document.getElementById('password');
// input.onkeyup(function(){
//   checkPassword(input.val());
// });

// var checkPassword = function(password){
   
// var checkNumber = password.search(/[0-9]/g);
// var checkEnglish = password.search(/[a-z]/ig);
// if(checkNumber <0 || checkEnglish <0){
//     alert("숫자와 영문자를 혼용하여야 합니다.");
//     input.val('').focus();
//     return false;
// }
// if(/(\w)\1\1\1/.test(password)){
//     alert('같은 문자를 4번 이상 사용하실 수 없습니다.');
//     input.val('').focus();
//     return false;
// }
    
// return true;
// }



