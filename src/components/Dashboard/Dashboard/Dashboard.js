import React, { useEffect, useState } from 'react';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import SideBar from '../SideBar/SideBar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Dashboard.css';

const Dashboard = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [appointments, setAppointments] = useState([]);
    const handleDateChange = (date) => {
        setSelectedDate(date);
    }
    useEffect(() => {
        const userEmail = sessionStorage.getItem('userEmail');
        fetch("https://whispering-tor-01032.herokuapp.com/appointmentsByDate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ date: selectedDate, email: userEmail })
        })
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [selectedDate])

    return (
        <div id="dashboard" className='container-fluid row'>
            <div className="col-md-2 px-0">
                <SideBar></SideBar>
            </div>
            <div className="col-md-4">
                <div className="dashboard-calendar">
                    <h5 className=" ml-4 my-3">Appointments</h5>
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>
            </div>
            <div className="col-md-6">
                <AppointmentsByDate appointments={appointments} date={selectedDate}></AppointmentsByDate>
            </div>
        </div>
    );
};

export default Dashboard;