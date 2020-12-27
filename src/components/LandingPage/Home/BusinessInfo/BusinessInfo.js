import React from 'react';
import { BsClock } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import './BusinessInfo.css';

const BusinessInfo = () => {
    const ourInfo = [
        {
            title: 'Opening Hours',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing.',
            icon: BsClock,
            background: 'primary',
        },
        {
            title: 'Visit Our Location',
            description: 'Kandir Par, Comilla',
            icon: FaMapMarkerAlt,
            background: 'dark',
        },
        {
            title: 'Contact Us Now',
            description: '+880 1777924136',
            icon: FiPhoneCall,
            background: 'primary',
        }
    ];
    console.log(ourInfo);
    return (
        <div className='businessInfo'>
            <div className="container">
                <div className="row">
                    {
                        ourInfo.map(info =>
                            <div className="col-lg-4 col-m-6 my-2">
                                <div className={`background-${info.background} businessCard d-flex justify-content-center align-items-center`}>
                                    <div>
                                        <i>{<info.icon />}</i>
                                    </div>
                                    <div>
                                        <h6>{info.title}</h6>
                                        <small>{info.description}</small>
                                    </div>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BusinessInfo;