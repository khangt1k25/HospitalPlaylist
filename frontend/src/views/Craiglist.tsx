import Row from './Row';
import { useEffect, useState } from "react";
import { getListDoctor } from '../services/admin';

export default function Craiglist() {
    return (
        <div className='Craiglist' style={{'marginBottom': 100}}>
            <Row Speciality='Healthcare'/>
            {/* <Row Speciality='General practitioner' /> */}
            <Row Speciality='Internist' />
            <Row Speciality='Surgeon' />
            <Row Speciality='Neurosurgeon' />
            <Row Speciality='Dentist' />
            {/* <Row Speciality='Acupuncture practitioner' /> */}
            <Row Speciality='Vet' />
        </div>
    )
}