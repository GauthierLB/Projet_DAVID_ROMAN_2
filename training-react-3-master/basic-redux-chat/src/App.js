import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from './Autobot_logo.svg';
import Routes from "./Routes";
import { Auth } from "aws-amplify";

import "./App.css";

class App extends Component {
	constructor(props) {
  super(props);

  this.state = {

  isAuthenticated: false,
  isAuthenticating: true










};
}

userHasAuthenticated = authenticated => {
  this.setState({ isAuthenticated: authenticated });
}
handleLogout = async event => {
  await Auth.signOut();

  this.userHasAuthenticated(false);
}
  render() {
  	const childProps = {
  isAuthenticated: this.state.isAuthenticated,
  userHasAuthenticated: this.userHasAuthenticated
};




  return (
				


			
				


    <div className="App container">
    <header className="App-header">
					<img src={logo} className="App-logo" alt="Autobot_logo" />
					<h1 className="App-title">Welcome to Hell again</h1>
				</header>
				<div style={{
						position: "absolute",
						top: 210,
						left: 0,
						right: 0,
						bottom: 0,
					}}>
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Scratch</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
           {this.state.isAuthenticated
  ? <NavItem onClick={this.handleLogout}>Logout</NavItem>
  : <Fragment>
      <LinkContainer to="/Application">
        <NavItem>SignIn</NavItem>
      </LinkContainer>
      <LinkContainer to="/login">
        <NavItem>Login</NavItem>
      </LinkContainer>
    </Fragment>
}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes childProps={childProps} />
    </div>
    </div>
  );
}
}
export default App;
