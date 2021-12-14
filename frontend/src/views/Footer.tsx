import { Navbar, Container, Nav } from "react-bootstrap"
import { BrowserRouter, Route } from "react-router-dom";


const Footer = () => {

    return (          
        <div>
        <Navbar className="fixed-bottom navbar-light" expand="lg" bg="light">
        <Container>
            <Navbar.Brand >Hospital Schedule</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
            <a href="https://github.com/khangt1k25" style={{color:"black", textDecoration:"none"}}> Copyright of HUST team</a>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </div>
    )
}

export default Footer;