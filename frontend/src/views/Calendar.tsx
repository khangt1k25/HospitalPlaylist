import React, { useEffect, useState, SyntheticEvent } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Spinner, Button, Form} from 'react-bootstrap';
import MyAvatar from './MyAvatar';
import axios from "axios";
import { detailDoctor } from '../services/doctor';
import { getAppointmentOfDoctor, createAppointment, approveAppointment } from '../services/getAppointment';
import moment from 'moment';

const Calendar = () => {
    
    
    const id = useParams()['id']
    const user_id = localStorage['id']
    const is_doctor = localStorage['is_doctor']

    const [doctorData, setdoctorData] = useState(Object)
    const [imageData, setimageData] = useState(Object)
    const [appointmentData, setappointmentData] = useState<any[]>([])

    const [description, setdescription] = useState('')
    const [date, setdate] = useState('')
    const [starttime, setstarttime] = useState('')
    const [endtime, setendtime] = useState('')
    const [owner, setowner] = useState(false)

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
        window.location.reload()
        
    }
    const approve = async (e: SyntheticEvent) => {
        e.preventDefault()
        const val = e.currentTarget.getAttribute("data-value");
        const body = {
            "appointmentId": val
        }
        var response = await approveAppointment(body)
        window.location.reload()
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
            setappointmentData(apresponse['data'])

            const currentid = localStorage.getItem('id')
            if(currentid == id){
                setowner(true)
            }

        }
        fetchData()
    }, [])


    return (
        <div className="calendar">
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
            <div className="doctorCalendar" style={{marginBottom:100, marginLeft:100, marginRight:100, marginTop:100}}>
                <h1>Doctor Appointment</h1>
                <table className="appointmentTable">
                            <tbody>
                                <tr>
                                    <th>ID</th>
                                    <th>UserID</th>
                                    <th>Start</th>
                                    <th>End</th>
                                    <th>Description</th>
                                    <th>Status</th>
                                    {owner && <th>Action</th>}
                                </tr>
                                {appointmentData.map(
                                    (appoint)=>{
                                        return (
                                            <tr key={appoint._id}>
                                                <td>{appoint._id}</td>
                                                <td>{appoint.userId}</td>
                                                <td>{moment(appoint.start).format("YYYY/MM/DD kk:mm:ss")}</td>
                                                <td>{moment(appoint.end).format("YYYY/MM/DD kk:mm:ss")}</td>
                                                <td>{appoint.userDescription}</td>
                                                {appoint.status=='Approved'?<td><Spinner animation="grow" variant="success"/></td>:<td><Spinner animation="grow" variant="warning" /></td>}     
                                                {
                                                    owner && <td> 
                                                    {appoint.status=='Pending'?<Button variant="warning" onClick={approve} data-value={appoint._id}>Approve</Button>:<Button variant="success" disabled>Waited</Button>}
                                                </td>
                                                }
                                                
                                            </tr>
                                        )
                                    }
                                )}
                            </tbody>
                </table>
            </div>
            {
             !(is_doctor=='true') &&  <div className='requestappointment' style={{marginBottom:100, marginLeft:200, marginRight:200, marginTop:100}}>
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
            }
        </div>
      
    )
}
export default Calendar


