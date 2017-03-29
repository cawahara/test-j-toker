import React from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Link } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {purple800} from 'material-ui/styles/colors';
import {purple600} from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

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

const style = { padding: '10px' };

export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {open: false};
  }
  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});
  render() {
    return (
      <MuiThemeProvider  muiTheme={muiTheme}>
        <div>
      <AppBar 
        title="React playground"
        onLeftIconButtonTouchTap={this.handleToggle}
      />
      <div style={style}>
        {this.props.children}
      </div>
    <Drawer
      docked={false}
      width={200}
      open={this.state.open}
      onRequestChange={(open) => this.setState({open})}
    >
      <Link to="/">
        <MenuItem onTouchTap={this.handleClose}>Home</MenuItem>
      </Link>
      <Link to="/axiospage">
        <MenuItem onTouchTap={this.handleClose}>Axios</MenuItem>
      </Link>
      <Link to="/repos">
        <MenuItem onTouchTap={this.handleClose}>React Router</MenuItem>
      </Link>
      <Link to="/jtoker">
        <MenuItem onTouchTap={this.handleClose}>j-toker</MenuItem>
      </Link>
      <Link to="/uploadimage">
        <MenuItem onTouchTap={this.handleClose}>Upload Image</MenuItem>
      </Link>
    </Drawer>
    </div>
  </MuiThemeProvider>
    );
  }
}
