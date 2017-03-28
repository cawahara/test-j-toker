import React from 'react'
import TextField from 'material-ui/TextField';
import Auth from 'j-toker'
import $ from 'jquery'
import RaisedButton from 'material-ui/RaisedButton';
import 'whatwg-fetch';
  
export const JtokerPage = () => {
  return( 
    <div>
    <h3>Jtoker Page</h3>
    <RaisedButton label="Sign in with email" onClick={() => handleClickESI()} /><br /><br />
    <RaisedButton label="Sign out" onClick={() => handleClickSO()}/><br /><br />
    <RaisedButton label="validate token" onClick={() => handleClickVT()} /><br /><br />
    <RaisedButton label="GET /lists/1" onClick={() => handleClickAPI('/lists/1')} /><br /><br />
    <RaisedButton label="GET /user/3" onClick={() => handleClickAPI('/users/3')} /><br /><br />
    <RaisedButton label="GET /list_items/1" onClick={() => handleClickAPI('/list_items/1')} /><br /><br />
    <RaisedButton label="Test" onClick={() => handleClickTest()} /><br /><br />
    </div>
  );
};

const handleClickTest = () => {
  Auth.configure({
    apiUrl: 'http://localhost:3000/api/v1',
    storage: 'localStorage',
  });
  const LOCALSTRAGE_AUTH_KEY = 'authHeaders';
  const DEFAULT_TIMEOUT = 10000;
  const API_BASE_URL = 'http://localhost:3000/api/v1/list_items/1'
  const headers = new Headers();
  const currentHeaders = JSON.parse(localStorage.getItem('authHeaders'));
  console.log('--- 1. currentHeaders ---' + currentHeaders);
  console.log('--- 2. tokenFormat ---');
  console.log(Auth.getConfig().tokenFormat);
  for (const key in Auth.getConfig().tokenFormat) {
    console.log('--- 3. key: ' + key +' value: ' + currentHeaders[key])
    headers.append(key, currentHeaders[key]);
  }
  headers.append('Content-Type', 'application/json');
  const reqBase = {
    baseURL: API_BASE_URL,
    timeout: DEFAULT_TIMEOUT,
    headers,
  };

  fetch(
    `${reqBase.baseURL}`,
    {
      method: 'GET',
      headers: reqBase.headers,
    },
  ).then( response => {
    response.json().then(res => {
      console.log(res);
    });
  }).catch( error => { 
    console.log(error);
  });
}

const handleClickAPI = (endpoint = '/lists/2') => {
  console.log('handleClickAPI' + endpoint);
  const API_BASE_URL = 'http://localhost:3000/api/v1';
  const headers = new Headers();
  const currentHeaders = localStorage.getItem('authHeaders');
  headers.append('Content-Type', 'application/json');
  const reqOpt = {
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers,
  };
  fetch(
    `${reqOpt.baseURL}${endpoint}`,
    {
      method: 'GET',
      headers: reqOpt.headers,
    },
  ).then((response) => {
    response.json().then(res => {
      console.log(res);
    });
  }).catch((error) => {
    console.log(error);
  });
}

const handleClickESI = () => {
  Auth.configure({
    apiUrl: 'http://localhost:3000/api/v1',
    storage: 'localStorage',
  });
  Auth.emailSignIn({
    email: 'mjames@tourplanna.com',
    password: 'password'
  })
    .then(function(resp) { 
      console.log("succesfully signed in with email"); 
      console.log(resp);
    }.bind(this))
    .fail(function(){ console.log("error on sign in with email"); }.bind(this));
};

const handleClickSO = () => {
  Auth.configure({
    apiUrl: 'http://localhost:3000/api/v1',
    storage: 'localStorage',
  });
  Auth.signOut()
    .then(function() { console.log("succesfully signed out"); }.bind(this))
    .fail(function(){ console.log("error on sign out"); }.bind(this));
}
const handleClickVT = () => {
  Auth.configure({
    apiUrl: 'http://localhost:3000/api/v1',
    storage: 'localStorage',
  });
  Auth.validateToken()
    .then(function() {
      console.log("token was validated");
      console.log(Auth.user);
      console.log(Auth.user.signedIn);
    }.bind(this))
    .fail(function(){ console.log("error on validation of token"); }.bind(this));
};
// <RaisedButton label="Sign up with email" onClick={this.handleClickESU}/><br /><br />
// <RaisedButton label="Sign in with Facebook" onClick={this.handleClickFSI}/><br /><br />
// <RaisedButton label="Send password reset email" onClick={this.handleClickRPR}/><br /><br />
// <RaisedButton label="Update password" onClick={this.handleClickUP}/><br /><br />
// <RaisedButton label="Update account" onClick={this.handleClickUA}/><br /><br />

// handleClickESU(event) {
// Auth.emailSignUp({
// username: 'mjames5',
// email: 'mjames5@tourplanna.com',
// password: 'password',
// password_confirmation: 'password'
// })
// .then(function(resp) { console.log("succesfully signed up with email"); }.bind(this))
// .fail(function(){ console.log("error on sign up with email"); }.bind(this));
// }
// handleClickFSI(event) {
//   Auth.oAuthSignIn({
//     provider: 'facebook'
//   })
//     .then(function(resp) { console.log("succesfully signed in with facebook"); }.bind(this))
// .fail(function(){ console.log("error on sign in with facebook"); }.bind(this));
// }
// handleClickRPR(event) {
// Auth.requestPasswordReset({ email: 'info@tourplanna.com' })
// .then(function(resp) { console.log("succesfully password reset email has been sent"); }.bind(this))
// .fail(function(){ console.log("error on sending password reset email"); }.bind(this));
// }
// handleClickUP(event) {
// Auth.updatePassword({ 
// password: 'password',
// password_confirmation: 'password' 
// })
// .then(function(resp) { console.log("succesfully password has been updated"); }.bind(this))
// .fail(function(){ console.log("error on update password"); }.bind(this));
  // }
  // handleClickUA(event) {
  //   Auth.updateAccount({
  //     name: 'name',
  //     description: 'description'
  //   })
      // .then(function(resp) { console.log("succesfully account has been updated"); }.bind(this))
      // .fail(function(){ console.log("error on update account"); }.bind(this));
  // }
  // componentDidMount() {
    // Auth.validateToken()
      // .then(function(user) { console.log("token was validated");}.bind(this))
      // .fail(function(){ console.log("error on validation of token"); }.bind(this));
  // };


export default JtokerPage;
