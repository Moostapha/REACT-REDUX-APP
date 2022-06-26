import React, { useEffect } from 'react';

// component
import MovieListing from '../MovieListing/MovieListing'



// Redux
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies } from '../../features/movies/movieSlice';
import { fetchAsyncShows } from '../../features/movies/movieSlice';

const Home = () => {
    
    const dispatch = useDispatch();

    // useEffect()
    useEffect( 
        () => {
            dispatch(fetchAsyncMovies());
            dispatch(fetchAsyncShows());
        }, 
        
        [dispatch] 
    
    );
    
    return (
        <div>
            <div className='banner-img'>
                <MovieListing/>
            </div>
        </div>
    );
};

export default Home;