import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import AppointmentMain from '../AppointmentMain/AppointmentMain';
import BookAppointment from '../BookAppointment/BookAppointment';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = (date) => {
        setSelectedDate(date)
    }

    return (
        <div className='appointment-page'>
            <AppointmentMain handleDateChange={handleDateChange} selectedDate={selectedDate} ></AppointmentMain>
            <BookAppointment date={selectedDate}></BookAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;