import React, { useEffect, useState, SyntheticEvent } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Spinner, Button, Form} from 'react-bootstrap';
import MyAvatar from './MyAvatar';
import axios from "axios";
import { detailDoctor } from '../services/doctor';
import { getAppointmentOfDoctor, createAppointment, approveAppointment } from '../services/getAppointment';



const Calendar = () => {

    const id = useParams()['id']
    const user_id = localStorage['id']
    const [doctorData, setdoctorData] = useState(Object)
    const [imageData, setimageData] = useState(Object)
    const [appointmentData, setappointmentData] = useState<any[]>([])

    const [description, setdescription] = useState('')
    const [date, setdate] = useState('')
    const [starttime, setstarttime] = useState('')
    const [endtime, setendtime] = useState('')
    
    const create = async (e: SyntheticEvent) => {
        e.preventDefault(); 
        var start = new Date(date + ' ' + starttime);
        var end = new Date(date + ' ' + endtime);

        const body = {
            "start": start,
            "end": end,
            "userId": user_id,
            "doctorId": id,
            "userDescription": description
        }
        var response = await createAppointment(body)
        console.log(response)
        
    }
    const approve = async (e: SyntheticEvent) => {
        e.preventDefault(); 
        const body = {
            "appointmentId": "61e1a591a1a4debf23638f36" //test this: wrong appointment
        }
        var response = await approveAppointment(body)
        console.log(response)
        
    }
    
    useEffect(  ()  => {
        const fetchData = async () => {
            const body = {
                "id": id
            }
            var response = await detailDoctor(body)   
            setdoctorData(response['data']);
            const img = {
                'imageUrl': "https://cdn1.tuoitre.vn/zoom/600_315/2019/5/8/avatar-publicitystill-h2019-1557284559744252594756-crop-15572850428231644565436.jpg",
                'width': 250,
                'height': 250,
                'scale': 1,
            }
            setimageData(img)
            const apbody = {
                "doctorId": id,
                "status": "all",
            }
            
            var apresponse = await getAppointmentOfDoctor(apbody)
            console.log(apresponse['data'])
            setappointmentData(apresponse['data'])
            console.log(appointmentData)
        }
        fetchData()
    }, [])

    
    const deleteRow = () => {

    }
    
    return (
        <div className="calendar">
            <Button onClick={approve}>Test approve for i want this</Button>
            <div className="doctorInfor" style={{marginTop:50, marginLeft:50}}>
                <Container>
                    <Row style={{width:'100%'}}>
                        <Col>
                            <div style={{float:'left'}}>
                                <MyAvatar {...imageData}/>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <h4>ID</h4>
                                <p>{id}</p>
                                <h4>Name</h4>
                                <p>{doctorData.username}</p>
                                <h4>Age</h4>
                                <p>{doctorData.age}</p>
                                <h4>Department</h4>
                                <p>{doctorData.department}</p>
                                <h4>Contact</h4>
                                <p>{doctorData.email}</p>
                                <h4>Description</h4>
                                <p>{doctorData.description}</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="doctorCalendar" style={{marginBottom:100, marginLeft:50, marginRight:50, marginTop:100}}>
                <h1>Doctor Appointment</h1>
                <table className="appointmentTable">
                            <tbody>
                                <tr>
                                    <th>ID</th>
                                    <th>UserID</th>
                                    <th>Start</th>
                                    <th>End</th>
                                    <th>Status</th>
                                    <th>StatusStr</th>
                                    <th>Description</th>
                                </tr>
                                {appointmentData.map(
                                    (appoint)=>{
                                        return (
                                            <tr key={appoint._id}>
                                                <td>{appoint._id}</td>
                                                <td>{appoint.userId}</td>
                                                <td>{appoint.start}</td>
                                                <td>{appoint.end}</td>
                                                {appoint.status=='Approved'?<td><Spinner animation="grow" variant="success"/></td>:<td><Spinner animation="grow" variant="warning" /></td>}
                                                <td>{appoint.status}</td>
                                                <td>{appoint.userDescription}</td>
                                            </tr>
                                        )
                                    }
                                )}
                            </tbody>
                </table>
            </div>
            <div className='requestappointment' style={{marginBottom:100, marginLeft:50, marginRight:50, marginTop:100}}>
                <h1>Create appointment</h1>
                <Form className='requestform' onSubmit={create}>
                    <Form.Group className="mb-3" controlId="formDate">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="date" name="date" required onChange={e => setdate(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formTime">
                        <Row>
                            <Col>
                                <Form.Label>Start</Form.Label>
                                <Form.Control type="time" name="starttime" required onChange={e => setstarttime(e.target.value)}/>
                            </Col>
                            <Col>
                                <Form.Label>End</Form.Label>
                                <Form.Control type="time" name="endtime" required onChange={e => setendtime(e.target.value)}/>    
                            </Col>
                        </Row>
                        
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="textarea" name="description" placeholder="Fill your description" required onChange={e=>setdescription(e.target.value)}  />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Create
                    </Button>
                </Form>
            </div>
        </div>
      
    )
}
export default Calendar


