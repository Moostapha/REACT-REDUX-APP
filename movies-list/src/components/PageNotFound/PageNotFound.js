import React from 'react';
// image
import pageError from '../../images/pageError.gif'
// import notFound from '../../images/notFound.png'

// style
import './PageNotFound.sass'

// JSX
const PageNotFound = () => {
    return (
        <div className='notFound'>
            <h2> Erreur !!! Cette page n'existe pas</h2>
            <img src={pageError} alt='404'/>
            {/* <img src={notFound} alt='404'/> */}
        </div>
    );
};

export default PageNotFound;