import React, { Component } from 'react'
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';

export default class Deposit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deposit: "" 
    };
    this.handleInputValue = this.handleInputValue.bind(this);
  }
  handleInputValue = key => e => {
    this.setState({ [key]: e.target.value });
  };
  redner() {
    return (
      <div>

        <Button variant="contained" color="primary" id="modalTest" data-toggle="modal" data-target="#signup"> 충전하기</Button>

        <div class="modal fade" id="signup" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title" id="myModalLabel">가상계좌</h4>
            </div>
            <div class="modal-body"></div>
            <Button variant="contained" color="primary" id="modalTest" data-toggle="modal" data-target="#signup"> 발급</Button>
      <TextField label="deposit" type="text" name="deposit" defaultValue="충전하기" onChange={this.handleInputValue("deposit")} />
      <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">취소</button>
              <button type="submit" class="btn btn-primary" type="submit">충전하기</button>
            </div>
            </div>
         </div>
        </div>
      </div>

    ); 
   
  }
}