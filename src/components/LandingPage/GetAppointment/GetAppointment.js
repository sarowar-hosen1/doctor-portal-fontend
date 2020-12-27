import React from 'react';
import doctor from '../../../images/doctor.png';
import './GetAppointment.css';

const GetAppointment = () => {
    return (
        <section className='appointment-container'>
            <div className="row px-0 mx-0">
                <div className="col-md-4 ofset-md-1 col-sm-1">
                    <img src={doctor} alt="" className="img-fluid"/>
                </div>
                <div className="col-md-6 col-sm-8">
                    <div className="appointment-content">
                        <h5 style={{ color:'rgb(28, 199, 193)'}}>Appointment</h5>
                        <h1 className="text-white">Make an appointment today</h1>
                        <p className="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem dolores dicta sequi mollitia assumenda amet veniam debitis repellendus cupiditate. Enim accusantium voluptas iste velit reiciendis, dolore dolorum totam id sunt?</p>
                        <button className='btn btn-brand text-white'>Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetAppointment;