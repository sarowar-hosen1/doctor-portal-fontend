import React from 'react';
import {BsArrowRight} from 'react-icons/bs';
import patient1 from '../../../images/patient1.png';
import patient2 from '../../../images/patient2.png';
import patient3 from '../../../images/patient3.png';
import './Blog.css';

const blogData = [
    {
        title: 'Check at least a doctor in a year for your teeth',
        description: 'It is a long established fact that by the readable content of a lot layout. The Point',
        name: 'Reased kabir',
        date: '22 Aug 2018',
        picture: patient1,
    },
    {
        title: 'Two time of brush in a day can keep your healthy',
        description: 'It is a long established fact that by the readable content of a lot layout. The Point',
        name: 'Dr. Caudi',
        date: '23 April 2019',
        picture: patient2,
    },
    {
        title: 'The teeth canceer talking a challanges',
        description: 'It is a long established fact that by the readable content of a lot layout. The Point',
        name: 'Dr Selina Afri',
        date: '23 April 2019',
        picture: patient3,
    }
]

const Blog = () => {
    return (
        <section className='blog'>
            <div style={{ marginBottom: '100px' }}>
                <h5 style={{ color: '#1CC7C1', textAlign: 'center' }}>BLOG</h5>
                <h2 style={{ color: '#3C4255', textAlign: 'center' }}>From Our Blog News</h2>
            </div>
            <div className="container">
                <div className="row">
                    {
                        blogData.map(blog =>
                            <div className="col-md-4">
                                <div className="blog-card">
                                    <div style={{ height: '100px' }} className='d-flex align-items-center'>
                                        <img style={{ height: '50px', width: '50px', marginRight: '20px' }} src={blog.picture} alt="" />
                                        <div>
                                            <h6>{blog.name}</h6>
                                            <p>{blog.date}</p>
                                        </div>
                                    </div>
                                    <div className="blog-content">
                                        <h5>{blog.title}</h5>
                                        <p>{blog.description}</p>
                                        <i><BsArrowRight/></i>
                                    </div>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blog;