import React from 'react';
import { useHistory } from 'react-router-dom';

const NoMatch = () => {
    const history = useHistory();
    return (
        <div style={{height:'100vh'}} className='d-flex flex-column align-items-center justify-content-center'>
            <div>
                <h5 className='text-center'>Error <span className='text-danger h6'>404</span></h5>
                <button onClick={() => history.push('/')} className='btn btn-brand px-5 text-white'>Home</button>
            </div>
        </div>
    );
};

export default NoMatch;