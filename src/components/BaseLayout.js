import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Panel} from 'react-bootstrap'


export default class BaseLayout extends Component {
  render() {
    return (

      <body>

      <Navbar inverse collapseOnSelect>
      <Navbar.Header>
      <Navbar.Brand>
      <a href="#">Georgia Tardy Art</a>
      </Navbar.Brand>
      <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#"><a href="#"><NavLink  activeClassName="selected" to="/">Home </NavLink></a></NavItem>
        <NavItem eventKey={2} href="#"><a href="#"><NavLink  activeClassName="selected" to="/products"> Artwork</NavLink></a></NavItem>
        <NavItem eventKey={2} href="#"><a href="#"><NavLink  activeClassName="selected" to="/about"> About</NavLink></a></NavItem>
        <NavItem eventKey={2} href="#"><a href="#"><NavLink  activeClassName="selected" to="/Contact"> Contact</NavLink></a></NavItem>
      </Nav>
      <Nav pullRight>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
        {this.props.children}


    // <a href="https://www.georgiatardyart.com">Fine Art & Design</a>
    // <a href="https://www.instagram.com/georgiatardyart/">Instagram</a>
    // <a href="https://www.facebook.com/georgiatardyart">Facebook</a>
    // <a href="https://www.linkedin.com/in/georgiatardyartist/">Linkedin</a>
    //


      </body>
    )
  }
}
