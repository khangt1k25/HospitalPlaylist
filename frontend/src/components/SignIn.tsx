import React, { SyntheticEvent, useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import '../css/sign.css'

const SignIn = () => {
    const [mail, setmail] = useState('')
    const [password, setpassword] = useState('')
    const [redirect, setredirect] = useState(false);
    
    const login = (e: SyntheticEvent) => {
        e.preventDefault()
        console.log(mail)
        console.log(password)
        setredirect(true);
    }
    if(redirect) {
        return <Navigate to='/'/>
    }{
        return (
            <div className='signin'>
                <h3>Sign in</h3>
                <Form className='my-form' onSubmit={login}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" required onChange={e=>setmail(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Enter Password" required onChange={e=>setpassword(e.target.value)}/>
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