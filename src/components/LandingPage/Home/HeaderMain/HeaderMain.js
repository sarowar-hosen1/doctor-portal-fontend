import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import chair from '../../../../images/chair.png';
import './HeaderMain.css';

const HeaderMain = () => {
    const history = useHistory();
    return (
        <main className="headerMain">
            <div className="row px-0 mx-0">
                <div className="col-md-4 offset-md-1 col-sm-12">
                    <div className="headerMain-content">
                        <h1>Your New Smile <br /> Starts Here</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo dolor officia doloribus! Obcaecati facilis quas, vel pariatur, earum eveniet dicta, tempora qui natus itaque quod! Doloremque placeat quibusdam esse totam sit blanditiis explicabo vel itaque ipsam numquam. Inventore sapiente fugit dolorum quod, facilis repudiandae atque magni impedit optio, numquam et?</p>
                        <button onClick={() => history.push('/appointment')} class="btn btn-brand text-white">GET APPOINTMENT</button>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="header-img">
                        <img className='img-fluid' src={chair} alt="" />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HeaderMain;