import React from 'react';

// carousel via react-slick
import Slider from 'react-slick';
// Settings for Slider carousel => 
import { Settings } from '../../common/carouselSettings';

// useSelector to fetch and display movies in this component
import { useSelector } from 'react-redux';
import { getAllMovies } from '../../features/movies/movieSlice';
import { getAllShows } from '../../features/movies/movieSlice';

// style de MovieListing
import './MovieListing.sass'

// component MovieCard injection data movies search
import MovieCard from '../MovieCard/MovieCard'

const MovieListing = () => {
    
    const movies = useSelector(getAllMovies);
    const shows = useSelector(getAllShows);
    
    let renderMovies = '';
    let renderShows = '';
    
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
    // console.log('RENDER-MOVIES', renderMovies);
    // console.log('TYPE DE MOVIES.SEARCH', typeof movies.Search)
    
    renderShows =
        shows.Response === 'True' ? 
        ( 
            // unique index by using API ID given otherwise error duplicated key 
            // data passed as a props to MovieCard
            // map() => index SECOND argument
            shows.Search.map((movie,index) => 
                
                (<MovieCard data={movie} key={index} />)
            )
            
        ):( 
            <div className='movies-error'>
                <h3>{shows.Error}</h3>
            </div>
        );
    
    
    return (
        <div className='movie-wrapper'>
            {/* condition for page upload with fragment */}
            {Object.keys(movies).length === 0 && Object.keys(shows).length === 0 ? 
                (<div className='loading'> 
                    <h2>Loading...</h2>
                </div>)
                :(
                <>
                <div className='movie-list'>
                    <h2>Films</h2>
                    <div className='movie-container'>
                        {/* Add of carousel Slider with spread Settings */}
                        <Slider {...Settings}>
                            {renderMovies}
                        </Slider>
                    </div>
                </div>
                <div className='show-list'>
                    <h2>Séries</h2>
                    <div className='movie-container'>
                        {/* Add of carousel Slider with spread Settings */}
                        <Slider {...Settings}>
                            {renderShows}
                        </Slider>
                    </div>
                </div>
                </>
                )
            }
        </div>
    )
    
};

export default MovieListing;