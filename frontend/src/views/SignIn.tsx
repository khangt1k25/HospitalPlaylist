import React, { SyntheticEvent, useState } from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import '../css/sign.css'
import { loginDoctor } from '../services/doctor';
import { loginPatient } from '../services/patient';

const SignIn = () => {
    let navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isDoctor, setisDoctor] = useState('NO');

    const login = async (e: SyntheticEvent) => {
        e.preventDefault();        
        localStorage.setItem('accessToken', 'ok');
        let body = {
            "username": username,
            "password": password,
        } 
        if (isDoctor=='NO'){
            loginPatient(body)
        }else{
            loginDoctor(body)
        }
        navigate('/userprofile')
    }

    return (
        <div className='signin'>
            <h3>Sign in</h3>
            <Form className='my-form' onSubmit={login}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>User name</Form.Label>
                    <Form.Control type="username" name="username" placeholder="Enter username" required onChange={e=>setUsername(e.target.value)}  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Enter Password" required onChange={e=>setPassword(e.target.value)}  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicIsDoctor">
                    <Form.Label>Is Doctor?</Form.Label>
                    <Form.Select required onChange={e=>setisDoctor(e.target.value)} >
                        <option>Yes</option>
                        <option>No</option>
                    </Form.Select>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Sign in
                </Button>
            </Form>
        </div>
    )
    
}

export default SignIn