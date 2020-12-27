import React from 'react';
import doctor1 from '../../../images/doctor1.png';
import doctor2 from '../../../images/doctor2.png';
import doctor3 from '../../../images/doctor3.png';
import {FcPhone} from 'react-icons/fc';
import './Doctor.css';



const doctors = [
    {
        name: 'Dr. Selina Afri',
        phone: '+88 01777324136',
        picture: doctor1
    },
    {
        name: 'Dr. Sarowar Hosen',
        phone: '+88 01777324136',
        picture: doctor2
    },
    {
        name: 'Dr. Afsana Jui',
        phone: '+88 01777324136',
        picture: doctor3
    }
]

const Doctor = () => {
    return (
        <section className='doctor-container'>
            <h5 style={{ color: '#1CC7C1', textAlign: 'center', marginBottom:'30px'}}>Our Doctor</h5>
            <div className="container">
                <div className="row">
                    {
                        doctors.map(doctor =>
                            <div className="col-md-4">
                                <div className="doctor-card">
                                    <div>
                                        <img src={doctor.picture} alt="" />
                                    </div>
                                    <h5 className='text-center'>{doctor.name}</h5>
                                    <p className='text-center'><i><FcPhone/></i>{doctor.phone}</p>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctor;