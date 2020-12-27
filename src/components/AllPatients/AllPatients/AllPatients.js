import React from 'react';
import SideBar from '../../Dashboard/SideBar/SideBar';
import AllPatientsList from '../AllPatientsList/AllPatientsList';
import './AllPatients.css';

const AllPatients = () => {
    return (
        <div className='allPatients-container container-fluid row'>
            <div className="col-md-2 px-0">
                <SideBar></SideBar>
            </div>
            <div className="col-md-10">
                <h5 className='my-4 mx-2'>Patients</h5>
                <AllPatientsList></AllPatientsList>
            </div>
        </div>
    );
};

export default AllPatients;