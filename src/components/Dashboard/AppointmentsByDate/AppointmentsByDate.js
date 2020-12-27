import { tr } from 'date-fns/locale';
import React from 'react';
import './AppointmentByDate.css';

const AppointmentsByDate = ({ appointments, date }) => {
    return (
        <div className='appointments-container'>
            <div className='appointment-list' style={{ margin: '60px 0px 0px 30px', height: '550px' }}>
                <div className='d-md-flex flex-row justify-content-between'>
                    <h5>Appointments</h5>
                    <p className="text-muted">{date.toDateString()}</p>
                </div>
                {
                    appointments.length > 0 ?
                        <table className='table table-borderless mt-4 appointment-table'>
                            <thead>
                                <tr>
                                    <th className="text-muted">SL</th>
                                    <th className="text-muted">Name</th>
                                    <th className="text-muted">Phone</th>
                                    <th className="text-muted">Email</th>
                                    <th className="text-muted">Service</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    appointments.map((appoint, index) =>
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{appoint.name}</td>
                                            <td>{appoint.phone}</td>
                                            <td>{appoint.email}</td>
                                            <td>{appoint.service}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                        :

                        <h6 className='text-center mt-5'>No appointment on this date</h6>
                }
            </div>
        </div>
    );
};

export default AppointmentsByDate;