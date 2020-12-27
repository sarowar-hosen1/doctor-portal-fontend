import React from 'react';
import BusinessInfo from './BusinessInfo/BusinessInfo';
import HeaderMain from './HeaderMain/HeaderMain';
import Navbar from '../../Shared/Navbar/Navbar';
import './Home.css';

const Home = () => {
    return (
        <div className='home'>
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <BusinessInfo></BusinessInfo>
        </div>
    );
};

export default Home;