import React, { SyntheticEvent, useState } from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap'
import { Navigate } from 'react-router-dom';
import '../css/sign.css'

const SignIn = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setredirect] = useState(false);
    const login = async (e: SyntheticEvent) => {
        e.preventDefault();        
        const response = await fetch('http://localhost:3007/profile', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }
        );
        console.log(response.json());
        setredirect(true);
    }
    if(redirect){
        return <Navigate to='/about' />
    } else{
        return (
            <div className='signin'>
                <h3>Sign in</h3>
                <Form className='my-form' onSubmit={login}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" required onChange={e=>setEmail(e.target.value)}  />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Enter Password" required onChange={e=>setPassword(e.target.value)}  />
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