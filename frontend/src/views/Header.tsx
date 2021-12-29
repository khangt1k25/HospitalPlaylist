import { useEffect, useState } from "react"
import { Navbar, Container, Nav, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import MyAvatar from './MyAvatar'

const Header = () => {
    let navigate = useNavigate()
    const localData = {
        'imageUrl':'https://cdn1.tuoitre.vn/zoom/600_315/2019/5/8/avatar-publicitystill-h2019-1557284559744252594756-crop-15572850428231644565436.jpg',
        'width': 70,
        'height': 70,
        'scale': 1,
        'userName': 'Avies'
    }
    const handClick = () => {
        console.log("click")
        navigate('/userprofile')
    }
    const signout = () => {
        console.log('signout')
        localStorage.removeItem('accessToken')
        navigate('/signin')
    }
    if (localStorage.getItem('accessToken') == 'ok') {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="/">Hospital playlist</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/about">About</Nav.Link>
                                <Nav.Link href="/craiglist">Find doctors</Nav.Link>                                
                            </Nav>
                            <Nav>
                                <div style={{float:'right', padding: 0, marginTop:15}}>
                                    <button style={{padding:0, margin:0, display:'block', border:10}}
                                        onClick={handClick}
                                    >
                                        <MyAvatar {...localData}/>
                                    </button>
                                    
                                </div>
                                <div style={{float: 'right', marginTop:15, marginRight:5, marginLeft:5}}>
                                    <h4>{localData.userName}</h4>
                                    <Button variant="outline-secondary" onClick={signout}>
                                        Sign out
                                    </Button>
                                    
                                </div>
     
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    } else {
        localStorage.removeItem('accessToken')
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