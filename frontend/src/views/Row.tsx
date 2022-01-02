import React, { useState, useEffect } from "react";
import "../css/row.css";
import Slider from "react-slick";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

type Props = {
  Speciality: string;
};
type Doctor = {
    id: string,
    name: string,
}


const Row = ({Speciality}: Props) => {
    let navigate = useNavigate()
    const doctors = [
        {
            id: "1",
            name: "John Smith",
            image: 'https://transcode-v2.app.engoo.com/image/fetch/f_auto,c_lfill,h_128,dpr_3/https://assets.app.engoo.com/images/9rGg7Q0FAP8LdGZyM2kIcd1LXqWBVKFdvfgdCTGnYQU.jpeg'
        },
        {
            id: "2",
            name: "Hellen Nick",
            image: 'https://media.istockphoto.com/photos/doctor-holding-digital-tablet-at-meeting-room-picture-id1189304032?k=20&m=1189304032&s=612x612&w=0&h=ovTNnR0JX2cRZkzMBed9exRO_PamZLlysLDFkXesr4Q='
        },
        {
            id: "1",
            name: "John Smith",
            image: 'https://transcode-v2.app.engoo.com/image/fetch/f_auto,c_lfill,h_128,dpr_3/https://assets.app.engoo.com/images/9rGg7Q0FAP8LdGZyM2kIcd1LXqWBVKFdvfgdCTGnYQU.jpeg'
        },
        {
            id: "3",
            name: "Hellen Nick",
            image: 'https://media.istockphoto.com/photos/doctor-holding-digital-tablet-at-meeting-room-picture-id1189304032?k=20&m=1189304032&s=612x612&w=0&h=ovTNnR0JX2cRZkzMBed9exRO_PamZLlysLDFkXesr4Q='
        },
        {
            id: "4",
            name: "John Smith",
            image: 'https://transcode-v2.app.engoo.com/image/fetch/f_auto,c_lfill,h_128,dpr_3/https://assets.app.engoo.com/images/9rGg7Q0FAP8LdGZyM2kIcd1LXqWBVKFdvfgdCTGnYQU.jpeg'
        },
        {
            id: "5",
            name: "Hellen Nick",
            image: 'https://media.istockphoto.com/photos/doctor-holding-digital-tablet-at-meeting-room-picture-id1189304032?k=20&m=1189304032&s=612x612&w=0&h=ovTNnR0JX2cRZkzMBed9exRO_PamZLlysLDFkXesr4Q='
        },
        {
            id: "6",
            name: "John Smith",
            image: 'https://transcode-v2.app.engoo.com/image/fetch/f_auto,c_lfill,h_128,dpr_3/https://assets.app.engoo.com/images/9rGg7Q0FAP8LdGZyM2kIcd1LXqWBVKFdvfgdCTGnYQU.jpeg'
        },
        {
            id: "7",
            name: "Hellen Nick",
            image: 'https://media.istockphoto.com/photos/doctor-holding-digital-tablet-at-meeting-room-picture-id1189304032?k=20&m=1189304032&s=612x612&w=0&h=ovTNnR0JX2cRZkzMBed9exRO_PamZLlysLDFkXesr4Q='
        }
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        rows: 1
        
    };
    const handleClick = (doctorid: String) => {
        console.log('click')
        console.log(doctorid)
        navigate('/calendar/'+doctorid)
    }   
    return (
        <div className='row-speciality' style={{marginTop:100, marginLeft:50}}>
            <h2>{Speciality}</h2>
                <Slider {...settings}>
                    {doctors.map((doctor, i) => {
                    return (
                        
                        <div key={doctor.id} className={"Row"}>
                        <Button key= {doctor.id} onClick={()=>{handleClick(doctor.id)}}>
                            <p>{doctor.name}</p>
                            <img
                                key={doctor.id}
                                className={"Row-posters-image"}
                                src={doctor.image}
                                alt={doctor.name}
                            />
                        </Button>
                        </div>
                    )
                    }
                    )}
            </Slider>
      </div>
    );
};

export default Row;