import Row from './Row';
import { useEffect, useState } from "react";
import { getListDoctor } from '../services/admin';

export default function Craiglist() {
    const [doctor, setDoctor] = useState();
    useEffect(() => {
        const getData = async() => {
            const req = await getListDoctor();
            setDoctor(req);
        }
        getData()
    },[]);
    
    console.log(doctor)
    return (
        <div className='Craiglist'>
            <Row Speciality='General'/>
            <Row Speciality='Dentis' />
            <Row Speciality='Neuron' />
        </div>

    )
}