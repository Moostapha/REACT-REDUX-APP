import React from 'react';
import { Link } from 'react-router-dom';

// images
import user from '../../images/user.png';

// styles
import './Header.sass'

const Header = () => {
    return (
        <div className='header'>
            
            <Link to='/'>
                <div className='logo'>
                    MOVIE APP
                </div>
            </Link>
                
            <div className='user-image'>
                <img src={user} alt='user'/>
            </div>
            
        </div>
    );
};

export default Header;