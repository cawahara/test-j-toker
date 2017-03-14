import React from 'react'
import TextField from 'material-ui/TextField';
import Auth from 'j-toker'
import $ from 'jquery'
import RaisedButton from 'material-ui/RaisedButton';
  
export default class ListEdit extends React.Component {
  constructor(props) {
    super(props);
    Auth.configure({
      apiUrl: 'http://localhost:3000/api/v1',
      storage: 'localStorage',
      authProviderPaths: {
        facebook:  '/auth/facebook',
      }
    });
  };
  handleClickESI(event) {
    Auth.emailSignIn({
      email: 'mjames@tourplanna.com',
      password: 'password'
    })
      .then(function(resp) { console.log("succesfully signed in with email"); }.bind(this))
      .fail(function(){ console.log("error on sign in with email"); }.bind(this));
  }
  handleClickESU(event) {
    Auth.emailSignUp({
      username: 'mjames5',
      email: 'mjames5@tourplanna.com',
      password: 'password',
      password_confirmation: 'password'
    })
      .then(function(resp) { console.log("succesfully signed up with email"); }.bind(this))
      .fail(function(){ console.log("error on sign up with email"); }.bind(this));
  }
  handleClickFSI(event) {
    Auth.oAuthSignIn({
      provider: 'facebook'
    })
      .then(function(resp) { console.log("succesfully signed in with facebook"); }.bind(this))
      .fail(function(){ console.log("error on sign in with facebook"); }.bind(this));
  }
  handleClickRPR(event) {
    Auth.requestPasswordReset({ email: 'info@tourplanna.com' })
      .then(function(resp) { console.log("succesfully password reset email has been sent"); }.bind(this))
      .fail(function(){ console.log("error on sending password reset email"); }.bind(this));
  }
  handleClickUP(event) {
    Auth.updatePassword({ 
      password: 'password',
      password_confirmation: 'password' 
    })
      .then(function(resp) { console.log("succesfully password has been updated"); }.bind(this))
      .fail(function(){ console.log("error on update password"); }.bind(this));
  }
  handleClickUA(event) {
    Auth.updateAccount({
      name: 'name',
      description: 'description'
    })
      .then(function(resp) { console.log("succesfully account has been updated"); }.bind(this))
      .fail(function(){ console.log("error on update account"); }.bind(this));
  }
  handleClickSO(event) {
    Auth.signOut()
      .then(function() { console.log("succesfully signed out"); }.bind(this))
      .fail(function(){ console.log("error on sign out"); }.bind(this));
  }
  handleClickVT(event) {
    Auth.validateToken()
      .then(function() {
        console.log("token was validated");
        console.log(Auth.user);
        console.log(Auth.user.signedIn);
      }.bind(this))
    .fail(function(){ console.log("error on validation of token"); }.bind(this));
  }
  componentDidMount() {
    Auth.validateToken()
      .then(function(user) { console.log("token was validated");}.bind(this))
      .fail(function(){ console.log("error on validation of token"); }.bind(this));
  }
  render() {
    return <div>
      <h3>Jtoker Page</h3>
      <RaisedButton label="Sign in with email" onClick={this.handleClickESI} /><br /><br />
      <RaisedButton label="Sign up with email" onClick={this.handleClickESU}/><br /><br />
      <RaisedButton label="Sign in with Facebook" onClick={this.handleClickFSI}/><br /><br />
      <RaisedButton label="Send password reset email" onClick={this.handleClickRPR}/><br /><br />
      <RaisedButton label="Update password" onClick={this.handleClickUP}/><br /><br />
      <RaisedButton label="Update account" onClick={this.handleClickUA}/><br /><br />
      <RaisedButton label="Sign out" onClick={this.handleClickSO}/><br /><br />
      <RaisedButton label="validate token" onClick={this.handleClickVT} /><br />
      </div>
  }
}
