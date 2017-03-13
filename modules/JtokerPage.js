import React from 'react'
import TextField from 'material-ui/TextField';
import Auth from 'j-toker'
import RaisedButton from 'material-ui/RaisedButton';
  
export default class ListEdit extends React.Component {
  constructor(props) {
    super(props);
    console.log("---constructor---");
    Auth.configure({apiUrl: 'http://localhost:3000/api/v1/'});
  };
  handleClick(event) {
    Auth.emailSignIn({
      email: 'mjames@tourplanna.com',
      password: 'password'
    })
    .then(function(resp) {
        console.log(Auth.user.signedIn);
    }.bind(this))
    .fail(function(){
        console.log("error sign in");
    }.bind(this));
  }
  handleClick2(event) {
    document.cookie = 'test-data=123';
    console.log(Auth.user.signedIn);
    Auth.validateToken()
      .then(function(user) {
        this.setState({ errors: null });
        console.log("log in");
      }.bind(this))
      .fail(function() {
        console.log("not login");
      });
  }
  componentDidMount() {
    console.log("---componentDidMount---");
    Auth.validateToken()
      .then(function(user) {
        this.setState({ errors: null });
        console.log("log in");
        console.log(user.username);
      }.bind(this))
      .fail(function() {
        console.log("not login");
      });
  }
  render() {
    return <div>
      <h3>Jtoker Page</h3>
      <TextField hintText="email"/><br />
      <TextField hintText="password"/><br />
      <RaisedButton 
        label="Sign in" 
        onClick={this.handleClick}
        primary={true}
      />
      <RaisedButton 
        label="check login" 
        onClick={this.handleClick2}
        primary={true}
      />
      </div>
  }
}
