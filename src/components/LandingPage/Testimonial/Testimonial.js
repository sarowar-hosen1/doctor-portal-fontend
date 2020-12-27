import React from 'react';
import patient1 from '../../../images/patient1.png';
import patient2 from '../../../images/patient2.png';
import patient3 from '../../../images/patient3.png';
import './Testimonial.css';

const testimonialData = [
    {
        name: 'Winson Herry',
        picture: patient1,
        address: 'California',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias possimus atque debitis voluptatem, quas, omnis minus ipsum culpa dignissimos quidem consequatur qui itaque sapiente odio quis quae placeat ratione quia!'
    },
    {
        name: 'Mark Jukarbarg',
        picture: patient2,
        address: 'California',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias possimus atque debitis voluptatem, quas, omnis minus ipsum culpa dignissimos quidem consequatur qui itaque sapiente odio quis quae placeat ratione quia!'
    },
    {
        name: 'Bill Grates',
        picture: patient3,
        address: 'California',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias possimus atque debitis voluptatem, quas, omnis minus ipsum culpa dignissimos quidem consequatur qui itaque sapiente odio quis quae placeat ratione quia!'
    }
]
const Testimonial = () => {
    return (
        <section className='testimonials'>
            <div>
                <h5 style={{color:'#1CC7C1', textAlign:'center'}}>TESTIMONIAL</h5>
                <h2 style={{color:'#3F465A', textAlign:'center', marginBottom:'80px'}}>What's Our Patient Say's</h2>
            </div>
            <div className="container">
                <div className="row">
                    {
                        testimonialData.map(testimonial =>
                            <div className="col-md-4">
                                <div className="testimonial-card">
                                    <div className="card-text">
                                        <p className="text-secondary text-justify">{testimonial.description}</p>
                                    </div>
                                    <div className='d-flex align-items-center mt-5'>
                                        <img style={{height:'50px', width:'50px', marginRight:'20px'}} src={testimonial.picture} alt=""/>
                                        <div>
                                            <h6 style={{color:'#1CC7C1'}}>{testimonial.name}</h6>
                                            <p className='text-muted'>{testimonial.address}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonial;