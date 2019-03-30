import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Menu from "./Menu";
import Book from "./Book"
import Contact from "./Contact";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

 
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          {/* <h1>Dark Rose Club</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to ="/About">About</NavLink></li>
            <li><NavLink to="/Menu">Menu</NavLink></li>
            <li><NavLink to="/Book">Book</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul> */}

<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Dark Rose</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link><li><NavLink to="/">Home</NavLink></li></Nav.Link>
      <Nav.Link><li><NavLink to ="/About">About</NavLink></li></Nav.Link>
      <Nav.Link><li><NavLink to ="/Menu">Menu</NavLink></li></Nav.Link>
      <Nav.Link><li><NavLink to ="/Book">Book</NavLink></li></Nav.Link>
      <Nav.Link><li><NavLink to ="/Contact">Contact</NavLink></li></Nav.Link>

      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>


          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/menu" component={Menu}/>
            <Route path="/book" component={Book}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
        </HashRouter>
    )
  }
}
 
export default Main;