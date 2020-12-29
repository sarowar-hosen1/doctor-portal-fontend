import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdDashboard } from 'react-icons/md';
import { FiCalendar, FiSettings, FiLogOut } from 'react-icons/fi';
import { BsPeople } from 'react-icons/bs';
import { AiOutlineFilePpt, AiOutlineHome, AiOutlineUserAdd } from 'react-icons/ai';
import './SideBar.css';
import { UserContext } from '../../../App';

const SideBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isDoctor, setIsDoctor] = useState(false);
    
    useEffect(() => {
        const token = sessionStorage.getItem('token');
        fetch('https://protected-mesa-99841.herokuapp.com/isDoctor', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify({token})
        })
            .then(res => res.json())
            .then(data => setIsDoctor(data))
    }, [])

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
                {
                    isDoctor ?
                        <div>
                            <li>
                                <i><BsPeople /></i>
                                <Link to='/dashboard/allPatients'>Patients</Link>
                            </li>
                            <li>
                                <i><AiOutlineFilePpt /></i>
                                <Link to='/deshboard/prescription'>Prescription</Link>
                            </li>
                            <li>
                                <i><AiOutlineUserAdd /></i>
                                <Link to='/addDoctor'>Add Doctor</Link>
                            </li>
                            <li>
                                <i><FiSettings /></i>
                                <Link to='/dashboard/settings'>Settings</Link>
                            </li>
                        </div>

                        :
                        <div style={{display: 'none'}}>

                        </div>
                }
            </ul>
            <button><i><FiLogOut /></i>Logout</button>
        </div>
    );
};

export default SideBar;