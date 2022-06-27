import React from 'react';
// image
import pageError from '../../images/pageError.gif'
// style
import './PageNotFound.sass'
// JSX
const PageNotFound = () => {
    return (
        <div className='notFound'>
            <img src={pageError} alt='404'/>
        </div>
    );
};

export default PageNotFound;