import React from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      mobile: "",
      address: "",
    };
    this.handleInputValue = this.handleInputValue.bind(this);
  }
  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };
  render() {
    return (
      <div>
        <span>
          <Button
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
              e.preventDefault();
              fetch("http://localhost:3000/Signup", {
                method: "POST",
                body: JSON.stringify(this.state),
                headers: {
                  "Content-Type": "application/json",
                },
              }).then((data) => {
                if (data.status === 201) {
                  alert("가입되었습니다");

                  this.props.history.push("/");
                } else {
                  alert("입력정보가 옳바르지 않습니다");
                }
              });
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
                    <TextField
                      label="이름"
                      type="text"
                      name="username"
                      onChange={this.handleInputValue("username")}
                    />
                    <br />

                    <TextField
                      label="email"
                      type="email"
                      name="email"
                      onChange={this.handleInputValue("email")}
                    />
                    <br />

                    <TextField
                      label="password"
                      type="password"
                      name="password"
                      onChange={this.handleInputValue("password")}
                    />
                    <br />

                    <TextField
                      label="password확인"
                      type="password"
                      name="password"
                      onChange={this.handleInputValue("password")}
                    />
                    <br />

                    <TextField
                      label="mobile"
                      type="text"
                      name="mobile"
                      onChange={this.handleInputValue("mobile")}
                    />
                    <br />

                    <TextField
                      label="address"
                      type="text"
                      name="address"
                      onChange={this.handleInputValue("address")}
                    />
                    <br />
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-default"
                      data-dismiss="modal"
                    >
                      취소
                    </button>
                    <button type="submit" class="btn btn-primary" type="submit">
                      완료
                    </button>
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
