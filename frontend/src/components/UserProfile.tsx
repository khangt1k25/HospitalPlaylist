import React, { useState } from 'react';
import { Container, Row,Col, Form } from 'react-bootstrap';
import MyAvatar from './MyAvatar';

const UserProfile = () => {
    const [email, setEmail] = useState('Khangruni@gmail.com');
    const [name, setName] = useState('Khang Nguyen Tran');
    const localData = {
        'imageUrl':'https://cdn1.tuoitre.vn/zoom/600_315/2019/5/8/avatar-publicitystill-h2019-1557284559744252594756-crop-15572850428231644565436.jpg',
        'width': 250,
        'height': 250,
        'scale': 1,
    }
    return (
        <Container style={{marginTop:100}}>
            <Row>
                <Col>
                    <div style={{float:'left'}}>
                        <MyAvatar {...localData}/>
                    </div>
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
