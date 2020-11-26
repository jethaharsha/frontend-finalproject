import React, { useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Collapse,NavbarToggler } from "reactstrap";
import logo from "./logo.png";
import "./headerstyle.css";
import "./App.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handletoggle = () => {setIsOpen(!isOpen)};

  const headStyle = {
    color: "white",
  };

  const headerstyle = {
    color: "white",  
  };

  return (
    <div className="container-fluid pad">
            <Navbar
              bg="light"
              variant="light"
              expand="sm"
            >  
            <NavbarBrand style={headStyle} href="/">
              <img src={logo} width="40"   height="35" alt="weather icon" />
              <span>Weather Dashboard</span>
            </NavbarBrand>
              <NavbarToggler className="toggle" onClick={handletoggle} aria-controls="basic-navbar-nav" 
              aria-label="Toggle navigation">
              <div className="animated-icon1"><span></span><span></span><span></span></div>
              </NavbarToggler>
             
              <Collapse id="basic-navbar-nav" isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink className="font-weight-normal" href="/About" style={headerstyle}> 
                    About   
                  </NavLink>
                </NavItem>
              </Nav>
              </Collapse>
            </Navbar>
        </div>
  );
};

export default Header;