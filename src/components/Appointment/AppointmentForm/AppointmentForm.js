import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import { MdClose } from 'react-icons/md'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        width: '50%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};


Modal.setAppElement('#root')

const AppointmentForm = ({ modalIsOpen, closeModal, title, date }) => {

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        data.service = title;
        data.date = date;
        data.create = new Date();
        fetch('https://whispering-tor-01032.herokuapp.com/addAppointment',{
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if (success) {
                closeModal();
                alert("Appointment confirm")
            }
        })
    };


    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <i onClick={closeModal} style={{ cursor: 'pointer' }} className='text-danger float-right'><MdClose /></i>
                <h4 className='text-center text-brand mb-2'>{title}</h4>
                <p className="text-muted text-center">{date.toDateString()}</p>
                <form style={{ padding: '20px 40px' }} onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input name="name" className='form-control mt-4' ref={register({ required: true })} placeholder="Name" />
                        {errors.name && <span className='text-danger text-sm ml-2'>Name is required</span>}
                    </div>
                    <div className="form-group">
                        <input name="phone" className='form-control mt-4' ref={register({ required: true })} placeholder="Phone" />
                        {errors.phone && <span className='text-danger text-sm ml-2'>Phone number is required</span>}
                    </div>
                    <div className="form-group">
                        <input name="email" className='form-control mt-4' ref={register({ required: true })} placeholder="Email" />
                        {errors.email && <span className='text-danger text-sm ml-2'>Email is required</span>}
                    </div>
                    <div className="form group row">
                        <div className="col-md-4">
                            <select className='form-control mt-4' ref={register({ required: true })} name="gender" ref={register}>
                                <option value="female disable">Female</option>
                                <option value="male">Male</option>
                                <option value="other">Other</option>
                            </select>
                            {errors.gender && <span className='text-danger text-sm ml-2'>Gender required</span>}
                        </div>
                        <div className="col-md-4">
                            <input name="age" className='form-control mt-4' ref={register({ required: true })} placeholder="Age" />
                            {errors.age && <span className='text-danger text-sm ml-2'>Age required</span>}
                        </div>
                        <div className="col-md-4">
                            <input name="weight" type='number' className='form-control mt-4' ref={register({ required: true })} placeholder="Weight" />
                            {errors.weight && <span className='text-danger text-sm ml-2'>Weight required</span>}
                        </div>
                    </div>
                    <input type="submit" value="SEND" className='btn btn-brand text-white w-25 d-block ml-auto' />
                </form>
            </Modal>
        </div>
    );
};

export default AppointmentForm;