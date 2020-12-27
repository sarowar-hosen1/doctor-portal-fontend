import React from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';
import './BookingCard.css';

const BookingCard = ({booking, date}) => {

    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="col-md-4">
            <div className="card">
                <h3 className="text-brand">{booking.subject}</h3>
                <h4>{booking.visitingHour}</h4>
                <p className='text-muted'>{booking.totalSpace} SPACE AVAILABLE</p>
                <button onClick={openModal} className='btn btn-brand text-white w-75 mx-auto'>BOOK APPOINTMENT</button>
                <AppointmentForm modalIsOpen={modalIsOpen} closeModal={closeModal} title={booking.subject} date={date} ></AppointmentForm>
            </div>
        </div>
    );
};

export default BookingCard;