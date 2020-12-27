import React from 'react';
import { Link } from 'react-router-dom';

const FooterCol = (props) => {
    const {menuTitle, menuItems} = props;
    return (
        <div className='col-md-3'>
            <h5 style={{color: '#11D0E0', marginBottom:'20px'}}>{menuTitle ? menuTitle : ''}</h5>
            <ul className='list-unstyled'>
                {
                    menuItems.map((item, index) => <li className='my-2' key={index}><Link to={item.link} className='text-muted'>{item.name}</Link></li>)
                }
            </ul>
            {props.children && props.children}
        </div>
    );
};

export default FooterCol;