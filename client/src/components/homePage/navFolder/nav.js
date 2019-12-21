import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import './nav.css';

class nav extends Component {

    render() {
        return <Navbar collapseOnSelect expand="lg" variant="light">
            <Navbar.Brand>
                <NavDropdown title="" id="collasible-nav-dropdown" className="btnDrop">
                    <NavDropdown.Item href="/account">Create Account</NavDropdown.Item>
                    <NavDropdown.Item href="/account">Log in</NavDropdown.Item>
                </NavDropdown>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Status</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    }
}

export default nav;