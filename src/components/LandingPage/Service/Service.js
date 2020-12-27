import React from 'react';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png'
import './Service.css';

const serviceData = [
    {
        name: 'Fluoride Treatment',
        img: fluoride
    },
    {
        name: 'Fluoride Treatment',
        img: cavity
    },
    {
        name: 'Fluoride Treatment',
        img: whitening
    }
]
const Service = () => {
    return (
        <section className='services py-4'>
            <div style={{ margin: '100px 0px 100px 0px' }} className='text-center'>
                <h5 className='text-brand'>OUR SERVICES</h5>
                <h2 className='text-brand2 mt-3'>Services We Provide</h2>
            </div>
            <div className="container">
                <div className="row">
                    {
                        serviceData.map(service =>
                            <div className="col-md-4 service-card">
                                <div className="text-center">
                                    <img style={{ width: '25%', height: '80px' }} className='img-fluid mx-auto d-block' src={service.img} alt="" />
                                    <h5 id='service-name' className='my-4'>{service.name}</h5>
                                    <p className='text-muted'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui rerum aliquid nobis. Deserunt vero consectetur assumenda rem expedita amet earum facere excepturi praesentium culpa</p>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Service;