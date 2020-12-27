import React from 'react';
import testimonial from '../../../images/testimonial.png';
import './FeatureService.css';

const Testimonials = () => {
    return (
        <div className='feature-conteiner'>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 ofset-md-1">
                        <div className="feature-img">
                            <img style={{height: '400px'}} src={testimonial} alt="" className="img-fluid"/>
                        </div>
                    </div>
                    <div className="col-md-6 ofset-md-1">
                        <div className="feature-content">
                            <h1>Exceptional Dental <br/> Care, On Your Terms</h1>
                            <p>It's is a long extablished fact that your reader will be distracted by readable content of a page when looking at it's layout. The point of it is lorem ipsum Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, nesciunt? Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <button className="btn btn-brand text-white px-3">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;