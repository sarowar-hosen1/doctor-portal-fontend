import React, { useEffect, useState } from 'react';
import SideBar from '../../Dashboard/SideBar/SideBar';
import PrescriptionTable from '../PrescriptionTable/PrescriptionTable';

const Prescription = () => {
    const [prescription, setPrescription] = useState([]);
    useEffect(() =>{
        fetch('https://protected-mesa-99841.herokuapp.com/prescriptions')
        .then(res => res.json())
        .then(data => setPrescription(data))
    },[])
    return (
        <div style={{background:'#F4FDFB', height:'100vh'}} className='prescription-container row px-0 mx-0'>
            <div className="col-md-2 p-0 m-0">
                <SideBar></SideBar>
            </div>
            <div className="col-md-10">
                <PrescriptionTable prescription={prescription} key={1}></PrescriptionTable>
            </div>
        </div>
    );
};

export default Prescription;