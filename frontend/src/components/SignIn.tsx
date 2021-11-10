import React, {Component} from 'react'
import {Form, Button} from 'react-bootstrap'
import '../css/sign.css'

class SignIn extends Component {

    render() {
        return (
            <div className='signin'>
                <h3>Sign in</h3>
                <Form className='my-form'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Enter Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Sign in
                    </Button>
                </Form>
            </div>
        )
    }
 
    
}

export default SignIn