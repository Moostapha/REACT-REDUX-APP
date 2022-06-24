import React, { useEffect } from 'react';

// component
import MovieListing from '../MovieListing/MovieListing'

// API call setting here
import movieApi from '../../common/apis/movieApi';     // axios + baseURL API
import {apiKey} from '../../common/apis/MovieApiKey'; // API key (env variables)

// Redux
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movies/movieSlice'


const Home = () => {
    // Test film recherché sur API
    const movieSearched = 'Batman';
    // Dispatch an action whenever getting values from the API to update the state with the reducer
    const dispatch = useDispatch();
    
    // useEffect()
    useEffect( () => {
        
        const fetchMovies = async () => {
            
            console.log('KEY:', process.env.REACT_APP_apiKey);
            
            // axios async request to API
            
            const response = await movieApi
            .get(`?apiKey=${apiKey}&s=${movieSearched}&type=movie`)
            .catch((error) => {
                console.log('ERREUR:', error)
            });
            dispatch(addMovies(response.data));
            console.log('REPONSE DE L\'API:', response);
        };
        
        // Appel de fetchMovies()
        fetchMovies();
        
    }, [dispatch]);
    
    return (
        <div>
            <div className='banner-img'>
                <MovieListing/>
            </div>
        </div>
    );
};

export default Home;