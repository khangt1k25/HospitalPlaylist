import React, { SyntheticEvent, useEffect, useState } from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import '../css/sign.css';
// import axios from 'axios';
import { registerDoctor } from '../services/doctor';
import { registerPatient } from '../services/patient';

const SignUp = () => {
    let navigate = useNavigate()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [password, setPassword] = useState('');
    const [comfirmedPassword, setcomfirmedPassword] = useState('');
    const [gender, setgender] = useState('Male');
    const [speciality, setspeciality] = useState('Patient');
    const [description, setdescription] = useState('')
    
    const register = async (e: SyntheticEvent) => {
        e.preventDefault();
        let body
        if (speciality == 'Patient'){
            body = {
                "username": name,
                "email": email,
                "password": password,
                "age":age,
                "gender":gender,
            } 
            var data = await registerPatient(body)
            // need handle error
            console.log(data)
        } else{
            
            body = {
                "username": name,
                "email": email,
                "password": password,
                "age":age,
                "department": speciality,
                "description": description,
            } 
            var data = await registerDoctor(body)
            // need handle error
            console.log(data)
        }
        navigate('/signin')
    }
    return (
        <div className='signup' style={{marginBottom: 100}}>
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
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextAge">
                                <Form.Label column sm="2">
                                Age
                                </Form.Label>
                                <Col sm="10">
                                <Form.Control type="age" name="age" placeholder="Age" required onChange={e=>setAge(e.target.value)} />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextGender">
                                <Form.Label column sm="2">
                                Gender
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Select required onChange={e=>setgender(e.target.value)}>
                                        <option value='Male'>Male</option>
                                        <option value='Female'>Female</option>
                                    </Form.Select>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextSpeciality">
                                <Form.Label column sm="2">
                                    Speciality
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Select required onChange={e=>setspeciality(e.target.value)}>
                                        <option value={'Patient'}>Patient</option>
                                        <option value={'General practitioner'}>General practitioner</option>
                                        <option value={'Surgeon'}>Surgeon</option>
                                        <option value={'Internist'}>Internist</option>
                                        <option value={'Neurosurgeon'}>Neurosurgeon</option>
                                        <option value={'Dentist'}>Dentist</option>
                                        <option value={'Acupuncture practitioner'}>Acupuncture practitioner</option>
                                        <option value={'Vet'}>Vet</option>
                                    </Form.Select>
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
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextDescription">
                                <Form.Label column sm="2">
                                    Description
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="description" as="textarea" style={{height:100}} name="description" placeholder="Some description" required onChange={e=>setdescription(e.target.value)} />
                                </Col>
                            </Form.Group>
                            <Button variant="primary" onClick={register}>
                                Sign up
                            </Button>
                        </Form>
                    </div>
    )

}

export default SignUp