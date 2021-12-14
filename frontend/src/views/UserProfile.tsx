import React, { useState } from 'react';
import { Container, Row,Col, Form } from 'react-bootstrap';


const UserProfile = () => {
    const [email, setEmail] = useState('Khangruni@gmail.com');
    const [name, setName] = useState('Khang Nguyen Tran');
    
    return (
        <Container>
            <Row>
                <Col>
                <p>This is Image</p>
                </Col>
                <Col>
                    <h1>User Profile</h1>
                    <Form className="form">     
                        <Form.Group controlId="formCategory1">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" defaultValue={name}/>
                        </Form.Group>
                        <Form.Group controlId="formCategory2">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" defaultValue={email} />
                        </Form.Group>
                    </Form>
                </Col>

            </Row>
        </Container>
    )
}

export default UserProfile
