import React, { useState, useEffect } from "react";
import "./row.css";

type Props = {
  Speciality: string;
};
type Doctor = {
    id: string,
    name: string,
}


const Row = ({Speciality}: Props) => {
    const doctors = [
        {
            id: "1",
            name: "John Smith",
        },
        {
            id: "2",
            name: "Hellen Nick"
        }
    ]
    return (
        <div className="Row">
        <h2>{Speciality}</h2>
        <div className="Row-posters">
            {doctors.map((doctor, i) => (
                <div>
                <p>doctor.id</p>
                <p>doctor.name</p>
                </div>
            ))}
        </div>
        </div>
    );
};

export default Row;