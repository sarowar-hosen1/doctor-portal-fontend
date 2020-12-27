import { Link } from 'react-router-dom'
import React, { useContext } from 'react';
import './Navbar.css';
import { UserContext } from '../../../App';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    return (
        <div className="">
            <nav class="navbar navbar-expand-lg navbar-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <Link to='/' class="nav-link mr-5">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/about' class="nav-link mr-5">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/dental/service' class="nav-link mr-5">Dental Services</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/review' class="nav-link mr-5">Review</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='blog' class="nav-link mr-5">Blog</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/contact' class="nav-link mr-5">Contact Us</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/dashboard' class="nav-link mr-5 text-brand">Dashboard</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/dashboard' class="nav-link mr-5" style={{color: 'orange'}}>{sessionStorage.getItem('user')}</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;