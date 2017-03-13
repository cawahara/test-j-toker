import React from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin';
import NavLink from './NavLink'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {purple800} from 'material-ui/styles/colors';
import {purple600} from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: purple800, //cyan500 #00BCD4
    primary2Color: purple600, //cyan700, #0097A7
  },
  appBar: {
    height: 50,
  },
});

export default React.createClass({
  render() {
    return (
      <MuiThemeProvider  muiTheme={muiTheme}>
      <div>
        <AppBar title="My AppBar" />
        <ul role="nav">
          <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
          <li><NavLink to="/axiospage">AxiosPage</NavLink></li>
          <li><NavLink to="/materialui">MaterialUiPage</NavLink></li>
          <li><NavLink to="/jtoker">jtoker</NavLink></li>
        </ul>
        {this.props.children}
      </div>
      </MuiThemeProvider>
    )
  }
})
