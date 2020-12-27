import React from 'react';
import './PrescriptionTable.css';

const PrescriptionTable = ({ prescription }) => {
    return (
        <div>
            <h5 className='my-4'>Prescription</h5>
            <div className='prescriptionTable-container'>
                <h6>All Prescription</h6>
                {
                    prescription.length ?
                        <table className='table table-borderless table-striped'>
                            <thead>
                                <tr className='table-header'>
                                    <th>SL NO</th>
                                    <th>Date</th>
                                    <th>Name</th>
                                    <th>Contact</th>
                                    <th>Prescription</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    prescription.map((patient, index) =>
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{new Date(patient.date).toDateString()}</td>
                                            <td>{patient.name}</td>
                                            <td>{patient.phone}</td>
                                            <td>
                                                <button className='btn btn-brand text-white'>View</button>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                        :
                        <div className='mt-5'>
                            <h6 className='text-center'>Loadding...</h6>
                        </div>
                }
            </div>
        </div>
    );
};

export default PrescriptionTable;