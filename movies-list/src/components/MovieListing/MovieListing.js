import React from 'react';

// useSelector to fetch and display movies in this component
import { useSelector } from 'react-redux';
import { getAllMovies } from '../../features/movies/movieSlice';

// style de MovieListing
import './MovieListing.sass'


// component MovieCard injection data movies search
import MovieCard from '../MovieCard/MovieCard'

const MovieListing = () => {
    
    const movies = useSelector(getAllMovies);
    
    let renderMovies = '';
    
    renderMovies =
        movies.Response === 'True' ? 
        ( 
            // unique index by using API ID given otherwise error duplicated key 
            // data passed as a props to MovieCard
            // map() => index SECOND argument
            movies.Search.map((movie,index) => 
                
                (<MovieCard data={movie} key={index} />)
            )
            
        ):( 
            <div className='movies-error'>
                <h3>{movies.Error}</h3>
            </div>
        );
    console.log('RENDER-MOVIES', renderMovies);
    console.log('TYPE DE MOVIES.SEARCH', typeof movies.Search)
    
    return (
        <div className='movie-wrapper'>
            <div className='movie-list'>
                <h2>Movies</h2>
                <div className='movie-container'>
                    {renderMovies}
                </div>
            </div>
        </div>
    )
    
};

export default MovieListing;