import React, { SyntheticEvent, useState } from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import '../css/sign.css'
import { loginAdmin } from '../services/admin';
import { loginDoctor } from '../services/doctor';
import { loginPatient } from '../services/patient';

const SignIn = () => {
    let navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setrole] = useState('Patient');

    const login = async (e: SyntheticEvent) => {
        e.preventDefault();        
        // localStorage.setItem('accessToken', 'ok');
        let body = {
            "username": username,
            "password": password,
        } 
        if (role == 'Patient'){
            var data = await loginPatient(body)
            
            
            if (data.status=='ok'){
                console.log(data)
                localStorage.setItem('id', data.user._id)
                localStorage.setItem('is_doctor', 'false')
                localStorage.setItem('accessTokenAdmin', 'ko');
                localStorage.setItem('is_login', 'ok')
                navigate('/userprofile')
            }else{
                localStorage.setItem('is_login', 'ko')
                alert("Login patient Fail")
                window.location.reload()
            }
            
        }else if (role == 'Doctor'){
            var data = await loginDoctor(body)
         
            console.log(data)
            if (data.status=='ok'){   
                console.log(data)
                localStorage.setItem('id', data.user._id)
                localStorage.setItem('is_login', 'ok')
                localStorage.setItem('is_doctor', 'true')
                localStorage.setItem('accessTokenAdmin', 'ko');
                navigate('/calendar/'+ data.user._id)
            }else{
                localStorage.setItem('is_login', 'ko')
                alert("Login doctor Fail")
                window.location.reload()
            }
        }else{

            var data = await loginAdmin(body)
            console.log("Admin here");
            localStorage.setItem('is_login', 'ok')
            localStorage.setItem('accessTokenAdmin', 'ok');
            navigate('/admin')
    
        }
        
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
                    <Form.Label>Role</Form.Label>
                    <Form.Select required onChange={e=>setrole(e.target.value)} >
                        <option value='Patient'>Patient</option>
                        <option value='Doctor'>Doctor</option>
                        <option value='Admin'>Admin</option>
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

