import React from 'react';
import { withRouter } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';
 
const responseGoogle = (googleUser, props) => {
  if(googleUser.profileObj === undefined)return;
  console.log(googleUser);
  let obj ={}
  let user = googleUser.profileObj;
  obj.name = user.familyName+user.givenName;
  obj.memberId = user.googleId;
  obj.email = user.email;
  obj.password = googleUser.tokenId;
  // let email = user.email;
  // let memberId = user.googleId;
  console.log(obj)
  // const apiUrl = 'http://ec2-54-180-105-165.ap-northeast-2.compute.amazonaws.com:3040' ;
  const apiUrl = 'http://54.180.105.165:3040' ;
  axios
  // .post(apiUrl+'/user/googleSignin',obj)
  .post('http://ec2-54-180-105-165.ap-northeast-2.compute.amazonaws.com:3040/user/googleSignin', obj)
  .then((result) => {
    // console.log(result.data, 'get data')
    console.log(result, 'result')
    props.handleClose();
    props.history.push('/');
  });
}
 
function Admin(props) {
  return (
  <GoogleLogin
    clientId="51190329735-ciio9gh389l8k5hus2a2584qps7req7j.apps.googleusercontent.com"
    buttonText="google SignUp"
    onSuccess={result => responseGoogle(result, props)}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
  )
}

export default withRouter(Admin)