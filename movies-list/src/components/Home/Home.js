import React, { useEffect } from 'react';


// component
import MovieListing from '../MovieListing/MovieListing'

// API call setting here
import movieApi from '../../common/apis/movieApi';     // axios + baseURL API
import {apiKey} from '../../common/apis/MovieApiKey'; // API key

// useEffect()

const Home = () => {
    // film recherché sur API
    const movieSearch = 'Batman'
    useEffect( () => {
        
        const fetchMovies = async () => {
            
            console.log('KEY:',process.env.REACT_APP_apiKey)
            const response = await movieApi.get(
                
                // Template litteral construit sur usage donné par API
                `?apiKey=${apiKey}&s=${movieSearch}&type=movie`
            )
            .catch((error) => {
                console.log('ERREUR:', error)
            });
            
            console.log('REPONSE DONNEE PAR L\'API', response)
        }
        
        // Appel de fetchMovies()
        fetchMovies();
    }, [])
    
    return (
        <div>
            <div className='banner-img'>
                <MovieListing/>
            </div>
        </div>
    );
};

export default Home;