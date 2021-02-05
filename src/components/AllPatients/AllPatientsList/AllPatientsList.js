import React, { useEffect, useState } from 'react';
import AllPatientsTable from '../AllPatientsTable/AllPatientsTable';
import './AllPatientsList.css';

const AllPatientsList = () => {
    const [allPatients, setAllPatients] = useState([])
    useEffect(() => {
        fetch('https://quiet-citadel-67982.herokuapp.com/allPatients')
            .then(res => res.json())
            .then(data => setAllPatients(data))
    }, [])
    return (
        <div className='allPatientsList'>
            <h6>All patients</h6>
            <div>
                {
                    allPatients.length ?
                        <AllPatientsTable allPatients={allPatients}></AllPatientsTable>
                        :

                        <div className='mt-5'>
                            <h6 className="text-center">Loadding...</h6>
                        </div>
                }
            </div>

        </div>
    );
};

export default AllPatientsList;