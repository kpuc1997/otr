import React from 'react';
import '../scss/custom.scss';


export default (props) => (
    <div className='card mb-2 bg-light' >
        <div className='card-body bg-light'>
            <h3 className='card-title text-center mb-1'>
                
                    {props.title}
                
            </h3><hr className='mb-2 mt-0 pt-0 pb-0' />
            <div className='card-text'>
                {props.children}
            </div>
        </div>
    </div>
);

// {'resumeCard col-12 mb-4 col-sm-' + (props.size || '4')}