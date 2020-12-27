import React from 'react';
import GetAppointment from './GetAppointment/GetAppointment';
import Home from './Home/Home';
import Service from './Service/Service';
import Testimonials from './FeatureService/FeatureService';
import Testimonial from './Testimonial/Testimonial';
import Blog from './Blog/Blog';
import Doctor from './Doctor/Doctor';
import Contact from './Contact/Contact';
import Footer from '../Shared/Footer/Footer';

const LandingPage = () => {
    return (
        <div className='landing-page'>
            <Home></Home>
            <Service></Service>
            <Testimonials></Testimonials>
            <GetAppointment></GetAppointment>
            <Testimonial></Testimonial>
            <Blog></Blog>
            <Doctor></Doctor>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default LandingPage;