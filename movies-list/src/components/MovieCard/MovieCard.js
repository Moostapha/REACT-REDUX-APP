import React from 'react';

// MovieCard style
import './MovieCard.sass';

// link for MovieDetail
import { Link } from 'react-router-dom'

// MovieListing pass a props of data to MovieCard
const MovieCard = (props) => {
    // props data from MovieListing.js
    const { data } = props;
    console.log(`DATA MOVIE RECEIVED FROM API`,  data)
    return (
        <div className='card-item'>
            
            <Link to={ `/movie/${data.imdbID}` }>
                <div className='card-inner'>
                    <div className='card-top'>
                        <img src={data.Poster} alt={data.Title}/>
                    </div>
                    <div className='card-bottom'>
                        <div className='card-info'>
                            <h4>{ data.Title }</h4>
                            <p>{data.Year}</p>
                        </div>
                    </div>
                </div>
            </Link>
            
        </div>
    );
};

export default MovieCard;