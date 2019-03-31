import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Book from "./Book"
import Contact from "./Contact";
import Footer from "./Footer"
import { Navbar, Nav } from 'react-bootstrap';



 
class Main extends Component {
  render() {
    return (
        <div>
        <HashRouter>
            <Navbar className='nav' expand="xl">
            <Navbar.Brand href="#home" className='linkButton'>Dark Rose Club</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link><li><NavLink className='linkButton' to="/">Home</NavLink></li></Nav.Link>
                <Nav.Link><li><NavLink className='linkButton' to ="/About">About</NavLink></li></Nav.Link>
                <Nav.Link><li><NavLink className='linkButton' to ="/Services">Services</NavLink></li></Nav.Link>
                <Nav.Link><li><NavLink className='linkButton' to ="/Book">Book</NavLink></li></Nav.Link>
                <Nav.Link><li><NavLink className='linkButton' to ="/Contact">Contact</NavLink></li></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/services" component={Services}/>
            <Route path="/book" component={Book}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </HashRouter>
</div>
    )
  }
}

export default Main;