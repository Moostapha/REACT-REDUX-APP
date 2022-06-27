import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';

// images
import user from '../../images/user.png';

// styles
import './Header.sass'

const Header = () => {
    //
    const [searched, setTerm] = useState('');
    //
    const dispatch = useDispatch()
    
    const submitHandler = (e) => {
        e.preventDefault();
        console.log('MOVIE OR SHOW SEARCHED:', searched);
        if (searched === '') return alert('Merci de remplir la barre de recherche !!!')
        dispatch(fetchAsyncMovies(searched));
        dispatch(fetchAsyncShows(searched));
        
        // reinitialisation input du form à vide
        setTerm('');
    };
    
    return (
        <div className='header'>
            
            <div className='logo'>
                <Link to='/'>MOVIE APP</Link>
            </div>
            
            <div className='search-bar'>
                <form onSubmit={submitHandler}>
                    <input
                        type='text'
                        value={searched}
                        onChange={ (e) => setTerm(e.target.value) }
                        placeholder='Recherche films et séries'
                    />
                    <button type='submit'>
                        <i className='fa fa-search'></i>
                    </button>
                </form> 
            </div>
            
            <div className='user-image'>
                <img src={user} alt='user'/>
            </div>
            
        </div>
    );
};

export default Header;