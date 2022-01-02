import React, { SyntheticEvent, useState } from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import '../css/sign.css';
import axios from 'axios';


const SignUp = () => {
    let navigate = useNavigate()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [comfirmedPassword, setcomfirmedPassword] = useState('');
   
    const register = async (e: SyntheticEvent) => {
        e.preventDefault();
        console.log(
            name,
            email,
            phone,
            address,
            password,
            comfirmedPassword,
        )
        var body = {
            username: name,
            email: email,
            password: password,
            age: 30,
            department: "Dentist",
            description: "Hello i am a doctor"
        };
        // axios.defaults.baseURL = 'https://api.example.com';
        axios.defaults.baseURL = "http://localhost:8000"
        const headers = {
            'Content-Type': 'application/json',
            // 'Authorization': 'JWT fefege...'
        }
        // , {headers: headers}
        axios.post('api/doctors/register/', body)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
        });
        
        navigate('/signin')
    }

    return (
                    <div className='signup'>
                        <h3>Be a member</h3>
                        <Form onSubmit={register}>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
                                <Form.Label column sm="2">
                                Name
                                </Form.Label>
                                <Col sm="10">
                                <Form.Control type="name" name="name" placeholder="Name" required onChange={e=>setName(e.target.value)} />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                <Form.Label column sm="2">
                                Email
                                </Form.Label>
                                <Col sm="10">
                                <Form.Control type="email" name="email" placeholder="Email" required onChange={e=>setEmail(e.target.value)}  />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPhone">
                                <Form.Label column sm="2">
                                Phone
                                </Form.Label>
                                <Col sm="10">
                                <Form.Control type="phone" name="phone" placeholder="Phone number" required onChange={e=>setPhone(e.target.value)}  />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextAddress">
                                <Form.Label column sm="2">
                                Address
                                </Form.Label>
                                <Col sm="10">
                                <Form.Control type="address" name="address" placeholder="Address" required onChange={e=>setAddress(e.target.value)}  />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                <Form.Label column sm="2">
                                Password
                                </Form.Label>
                                <Col sm="10">
                                <Form.Control type="password" name="password" placeholder="Password" required onChange={e=>setPassword(e.target.value)} />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextConfirmedPassword">
                                <Form.Label column sm="2">
                                Confirmed Password
                                </Form.Label>
                                <Col sm="10">
                                <Form.Control type="password" name="confirmedpassword" placeholder="Confirmed Password" required onChange={e=>setcomfirmedPassword(e.target.value)} />
                                </Col>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Sign up
                            </Button>
                        </Form>
                    </div>
    )

}

export default SignUp