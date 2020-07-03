import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

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
  }

  render() {
    return (
      <div>
        <div className="userInfo">
          아이디
          <input type="text" placeholder="이름" /> <button>아이디 체크</button>
          비밀번호
          <input type="password" placeholder="비밀번호" />
          비밀번호 확인
          <input type="password" placeholder="비밀번호 확인" />
          이름
          <input type="text" placeholder="이름" />
          이메일
          <input type="text" placeholder="이메일" />
          전화번호
          <input type="text" placeholder="전화번호" />
        </div>

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
