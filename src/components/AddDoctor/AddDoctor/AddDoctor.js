import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import SideBar from '../../Dashboard/SideBar/SideBar';
import './addDoctor.css';

const AddDoctor = () => {
    const history = useHistory();
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data) => {
        const file = data.image[0];
        const formData = new FormData()
        formData.append('name', data.name)
        formData.append('email', data.email)
        formData.append('phone', data.phone)
        formData.append('file', file)
        fetch('https://quiet-citadel-67982.herokuapp.com/addDoctor', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert("Doctor added succesfully!")
                }
                history.push('/dashboard')
            })
    };

    return (
        <div className='container-fluid row addDoctor'>
            <div className="col-md-2 px-0">
                <SideBar></SideBar>
            </div>
            <div className="col-md-10">
                <div>
                    <h5 className='my-4 text-center'>Add a doctor</h5>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <input name="name" className='form-control' ref={register({ required: true })} placeholder='Name' />
                            {errors.name && <span>Name is required</span>}
                        </div>

                        <div className="form-group">
                            <input name="email" className='form-control' ref={register({ required: true })} placeholder='Email' />
                            {errors.email && <span>Email is required</span>}
                        </div>

                        <div className="form-group">
                            <input name="phone" className='form-control' ref={register({ required: true })} placeholder='Phone' />
                            {errors.phone && <span>Phone is required</span>}
                        </div>

                        <div className="form-group">
                            <input name="image" type='file' ref={register({ required: true })} />
                            {errors.image && <span>Phone is required</span>}
                        </div>

                        <input type="submit" className='btn btn-brand text-white px-5' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddDoctor;