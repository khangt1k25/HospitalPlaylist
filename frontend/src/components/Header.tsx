import { Component } from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import About from './About';
import { BrowserRouter, Route } from "react-router-dom";

class Header extends Component {
    render(){
        return (
            <div>
                <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Hospital playlist</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/signin">Sign in</Nav.Link>
                        <Nav.Link href="/signup">Sign up</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
            </div>
        )
    }
}
export default Header