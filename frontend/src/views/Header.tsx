import { useEffect, useState } from "react"
import { Navbar, Container, Nav } from "react-bootstrap"

const Header = () => {
    const [auth, setAuth] = useState(false);
    useEffect(()=>{
        if(localStorage.getItem('accessToken')=='ok'){
            setAuth(true);
        }
    }, [])
    if (auth){
        return (
            <div>
            <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Hospital playlist</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/signin">Sign In</Nav.Link>
                    <Nav.Link href="/signup">Sign Up</Nav.Link>
                    <Nav.Link href="/calendar">Calendar</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
        )
    }else{
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