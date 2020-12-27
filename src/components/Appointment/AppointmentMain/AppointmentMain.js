import React, { useState } from 'react';
import chair from '../../../images/chair.png';
import Navbar from '../../Shared/Navbar/Navbar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './AppointmentMain.css';

const AppointmentMain = ({ handleDateChange, selectedDate }) => {


    return (
        <main className="appointment-main">
            <Navbar></Navbar>
            <div className="row px-0 mx-0">
                <div className="col-md-4 offset-md-1 col-sm-12">
                    <div className="appoint-calendar">
                        <h1>Appoinment</h1>
                        <Calendar
                            onChange={handleDateChange}
                            value={(selectedDate)}
                        />
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="header-img">
                        <img className='img-fluid' src={chair} alt="" />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AppointmentMain;