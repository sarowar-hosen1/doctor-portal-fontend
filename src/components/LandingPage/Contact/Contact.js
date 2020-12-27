import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className='contact-container'>
            <div>
                <h5 style={{ color: '#1CC7C1', textAlign: 'center' }}>Contact Us</h5>
                <h2 style={{ color: 'white', textAlign: 'center' }}>Allways connect with us</h2> F
            </div>
            <div className="container">
                <div style={{width: '75%', margin:'auto'}}>
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Email address*" required />
                            <input type="text" className="form-control" placeholder="Subject*" required />
                            <textarea className="form-control" rows="5" placeholder="Your Message*" required />
                            <input type="submit" value="SUBMIT" className="btn btn-brand text-white d-block mx-auto px-5" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;