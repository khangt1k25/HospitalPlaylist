import React, { useEffect, useState } from 'react';
import { Container, Row,Col, Form, Button, Spinner } from 'react-bootstrap';
import "../css/appointmentTable.css";
import { getUserInfo } from '../services/patient';
import MyAvatar from './MyAvatar';


const UserProfile = () => {

    const [data, setdata] = useState(Object)

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const userId = localStorage.getItem('id')

    const localData = {
        'imageUrl':'https://cdn1.tuoitre.vn/zoom/600_315/2019/5/8/avatar-publicitystill-h2019-1557284559744252594756-crop-15572850428231644565436.jpg',
        'width': 250,
        'height': 250,
        'scale': 1,
    }
    const fetchData = async () => {
        const body = {
            "id": userId
        }
        var response = await getUserInfo(body)
        console.log(response['data'])
        setdata(response['data'])
        setName(response['data']['username'])
        setEmail(response['data']['email'])
    }
    useEffect(() => {
        fetchData()  
    }, [])
    const appointments = [
        {
            "id": 1,
            "doctor": "alex",
            "date": "20/11/2000",
            "status": "ended",
        },
        {
            "id": 2,
            "doctor": "Vioi",
            "date": "20/11/2000",
            "status": "waited",
        },
        {
            "id": 3,
            "doctor": "Aoitr",
            "date": "20/11/2000",
            "status": "pending",
        }
    ]
    return (
        <div className='userProfile'>
            <Container style={{marginTop:100}}>
                <Row style={{width:'100%'}}>
                    <Col>
                        <div style={{float:'left'}}>
                            <MyAvatar {...localData}/>
                        </div>
                    </Col>
                    <Col style={{alignContent:'center'}}>
                        <h1>Profile</h1>
                        <Form className="form mb-3">     
                            <Form.Group controlId="formCategory1 mb-3">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" defaultValue={name}/>
                            </Form.Group>
                            <Form.Group controlId="formCategory2 mb-3 mt-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" defaultValue={email} />
                            </Form.Group>
                            <Form.Group controlId="mb-3 mt-3">
                                <Button style={{alignContent: 'center', marginTop: 5}}>Update</Button>
                            </Form.Group>
                            
                        </Form>
                        
                    </Col>
                </Row>
            </Container>
            <Container style={{marginTop: 100}}>
                <Row style={{width:'100%'}}>
                    <Col style={{alignItems:'center', paddingTop:50}}>
                        <h1  style={{alignItems:'center'}}>Appointments</h1>
                        <table className="appointmentTable">
                        <tbody>
                            <tr>
                                <th>ID</th>
                                <th>Date</th>
                                <th>Doctor</th>
                                <th>Status</th>
                            </tr>
                            {appointments.map(
                                (appoint)=>{
                                    return (
                                        <tr key={appoint.id}>
                                            <td>{appoint.id}</td>
                                            <td>{appoint.date}</td>
                                            <td>{appoint.doctor}</td>
                                            {appoint.status=='ended'?<td><Spinner animation="grow" variant="success"/></td>:<td><Spinner animation="grow" variant="warning" /></td>}
                                        </tr>
                                    )
                                }
                            )}
                        </tbody>
                        </table>
                    </Col>
                </Row>
            </Container>
        </div>
        
    )
}

export default UserProfile
