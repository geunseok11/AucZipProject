import React, { Component, useState } from 'react'
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';

const Deposit = (props) => {
  console.log(props)

  const [userInfo, setUserInfo] = useState({
    money: ""
  });

  const handleInputValue = (key) => (e) => {
    setUserInfo({ ...userInfo, [key]: e.target.value });
    console.log(userInfo);
  };

    return (
      <div>

        <Button variant="contained" color="primary" id="modalTest" data-toggle="modal" data-target="#deposit"> 충전하기</Button>
        <form
          onSubmit={(e) => {
            console.log(userInfo, "userInfo");
            e.preventDefault();
            fetch("http://54.180.105.165:3040/user/info", {
            // fetch("http://54.180.105.165:3040/user/signup", {
              method: "POST",
              body: JSON.stringify(userInfo),
              headers: {
                "Content-Type": "application/json",
              },
            })
              .then((data) => {
                if (data.status === 200) {
                  alert("충전되었습니다");
                  //props.history.push("/");
                } else {
                  alert("입력정보가 옳바르지 않습니다");
                }
              })
              .catch((e) => console.log(e, "err"));
          }}
        >
        <div class="modal fade" id="deposit" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title" id="myModalLabel">가상계좌</h4>
            </div>
            <div class="modal-body"></div>
            <Button variant="contained" color="primary" id="modalTest" data-toggle="modal" data-target="#signup"> 발급</Button>
      <TextField label="deposit" type="text" name="deposit" defaultValue="충전하기" onChange={handleInputValue("money")} />
      <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">취소</button>
              <button type="submit" class="btn btn-primary" type="submit">충전하기</button>
            </div>
            </div>
         </div>
        </div>
        </form>
      </div>

    ); 
   
  }

  export default Deposit;