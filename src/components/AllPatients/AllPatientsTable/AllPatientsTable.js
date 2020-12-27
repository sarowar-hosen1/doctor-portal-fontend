import React from 'react';

const AllPatientsTable = ({ allPatients }) => {
    return (
        <table className='table table-borderless table-striped'>
            <thead>
                <tr className='table-header'>
                    <th>SL NO</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Age</th>
                    <th>Weight</th>
                    <th>Contact</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {
                    allPatients.map((patient, index) =>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{patient.name}</td>
                            <td>{patient.gender}</td>
                            <td>{patient.age}</td>
                            <td>{patient.weight}</td>
                            <td>{patient.phone}</td>
                            <td>Comilla, Kandir-par, Comilla</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default AllPatientsTable;