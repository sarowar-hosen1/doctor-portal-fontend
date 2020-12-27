import React from 'react';
import FooterCol from './FooterCol';
import './Footer.css';
import {FaFacebook, FaGoogle, FaTwitter} from 'react-icons/fa';

const Footer = () => {
    const noName = [
        { name: "Emergency dental Care", link: "/emergency" },
        { name: "Check Up", link: "/check-up" },
        { name: "Treatment of personal desease", link: "/personal-desease" },
        { name: "Tooth Extraction", link: "/tooth-extraction" },
        { name: "Check Up", link: "/check-up" },
    ]
    const ourServices = [
        { name: "Emergency dental Care", link: "/emergency" },
        { name: "Check Up", link: "/check-up" },
        { name: "Treatment of personal desease", link: "/personal-desease" },
        { name: "Tooth Extraction", link: "/tooth-extraction" },
        { name: "Check Up", link: "/check-up" },
        { name: "Check Up", link: "/check-up" },
        { name: "Check Up", link: "/check-up" },
    ]
    const oralHealth = [
        { name: "Emergency dental Care", link: "/emergency" },
        { name: "Check Up", link: "/check-up" },
        { name: "Treatment of personal desease", link: "/personal-desease" },
        { name: "Tooth Extraction", link: "/tooth-extraction" },
        { name: "Check Up", link: "/check-up" },
        { name: "Check Up", link: "/check-up" },
        { name: "Check Up", link: "/check-up" }
    ]
    const outAddress = [
        { name: 'Cumilla Kandirpar, Comilla' }
    ]
    return (
        <section className='footer-container'>
            <div className="container">
                <div className="row">
                    <FooterCol key={1} menuTitle={"-"} menuItems={noName}></FooterCol>
                    <FooterCol key={2} menuTitle={"Services"} menuItems={ourServices}></FooterCol>
                    <FooterCol key={3} menuTitle={"Oral Health"} menuItems={oralHealth}></FooterCol>
                    <FooterCol key={4} menuTitle={"Our Address"} menuItems={outAddress}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="www.facebook.com"><i><FaFacebook/></i></a></li>
                            <li className="list-inline-item"><a href="www.facebook.com"><i><FaGoogle/></i></a></li>
                            <li className="list-inline-item"><a href="www.facebook.com"><i><FaTwitter/></i></a></li>
                        </ul>
                        <div className="my-5">
                            <h6>Call Now</h6>
                            <button className="btn btn-brand text-white">+88 01777924136</button>
                        </div>
                    </FooterCol>
                </div>
            </div>
        </section>
    );
};

export default Footer;