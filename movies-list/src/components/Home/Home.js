import React, { useEffect } from 'react';

// component
import MovieListing from '../MovieListing/MovieListing'

// Redux
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies } from '../../features/movies/movieSlice';
import { fetchAsyncShows } from '../../features/movies/movieSlice';

const Home = () => {
    
    const dispatch = useDispatch();
    // films affichés sur page d'accueil
    const movieOnHome = 'Batman';
    const showOnHome = 'Dragon Ball Z'
    // useEffect()
    useEffect( 
        () => {
            dispatch(fetchAsyncMovies(movieOnHome ));
            dispatch(fetchAsyncShows(showOnHome));
        }, 
        
        [dispatch] 
    
    );
    
    return (
        // <div>
            <div className='banner-img'>
                <MovieListing/>
            </div>
        // </div>
    );
};

export default Home;