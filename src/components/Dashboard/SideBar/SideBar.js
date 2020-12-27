import React from 'react';
import { Link } from 'react-router-dom';
import { MdDashboard } from 'react-icons/md';
import { FiCalendar, FiSettings, FiLogOut } from 'react-icons/fi';
import { BsPeople } from 'react-icons/bs';
import { AiOutlineFilePpt, AiOutlineHome } from 'react-icons/ai';
import './SideBar.css';

const SideBar = () => {
    return (
        <div className='sidebar'>
            <ul className='list-unstyled'>
                <li>
                    <i><AiOutlineHome /></i>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <i><MdDashboard /></i>
                    <Link to='/dashboard'>Dashboard</Link>
                </li>
                <li>
                    <i><FiCalendar /></i>
                    <Link to='/dashboard/appointment'>Appointment</Link>
                </li>
                <li>
                    <i><BsPeople /></i>
                    <Link to='/dashboard/allPatients'>Patients</Link>
                </li>
                <li>
                    <i><AiOutlineFilePpt /></i>
                    <Link to='/deshboard/prescription'>Prescription</Link>
                </li>
                <li>
                    <i><FiSettings /></i>
                    <Link to='/dashboard/settings'>Settings</Link>
                </li>
            </ul>
            <button><i><FiLogOut /></i>Logout</button>
        </div>
    );
};

export default SideBar;