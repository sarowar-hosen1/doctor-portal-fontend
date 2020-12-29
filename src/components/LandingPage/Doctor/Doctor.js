import React, { useEffect, useState } from 'react';
import { FcPhone } from 'react-icons/fc';
import './Doctor.css';


const Doctor = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('https://protected-mesa-99841.herokuapp.com/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    return (
        <section className='doctor-container'>
            <h5 style={{ color: '#1CC7C1', textAlign: 'center', marginBottom: '30px' }}>Our Doctor</h5>
            <div className="container">
                <div className="row">
                    {
                        doctors.map(doctor =>
                            <div className="col-md-4">
                                <div className="doctor-card">
                                    <div>
                                        <img src={`https://protected-mesa-99841.herokuapp.com/${doctor.img}`} alt="" />
                                    </div>
                                    <h5 className='text-center'>Dr. {doctor.name}</h5>
                                    <p className='text-center'><i><FcPhone /></i>{doctor.phone}</p>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctor;