import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Récupération dynamique imdbID depuis URL
import { useParams } from 'react-router-dom';
import { 
    fetchAsyncMovieOrShowDetail, 
    getMovieOrShowDetail,
    removePreviousDetail
} from '../../features/movies/movieSlice';

// style of this component
import './MovieDetail.sass'

const MovieDetail = () => {
    
    const { imdbID } = useParams();
    
    // dispatch of action creator
    const dispatch = useDispatch();
    
    // details from the store with useSelector
    const data = useSelector(getMovieOrShowDetail);
    console.log('MOVIE OR SHOW DETAIL:', data)
    
    useEffect(() => {
        dispatch(fetchAsyncMovieOrShowDetail(imdbID))
        
        //removing previous selected movie or show detail
        return () => {

            dispatch(removePreviousDetail())
        
        }
        
    }, [ dispatch, imdbID ])
    
    return (
        <div className='movie-section'>
            {/* condition for page upload with fragment */}
            {Object.keys(data).length === 0 ?
                (<div> <h2>Loading...</h2> </div>)
                :(
                    <>
                <div className='section-left'>
                    <div className='movie-title'>
                        { data.Title }
                    </div>
                    <div className='movie-rating'>
                        <span>
                            IMBD Rating <i className='fa fa-star'></i>: {data.imdbRating}
                        </span>
                        <span>
                            IMBD Votes <i className='fa fa-thumbs-up'></i>: {data.imbdVotes}
                        </span>
                        <span>
                            Runtime <i className='fa fa-film'></i>: {data.Runtime}
                        </span>
                        <span>
                            Year <i className='fa fa-calendar'></i>: {data.Year}
                        </span>
                    </div>
                    <div className='movie-plot'>
                        {data.Plot}
                    </div>
                    <div className='movie-info'>
                        <div>
                            <span>Director: </span>
                            <span>{data.Director}</span>
                        </div>
                        <div>
                            <span>Actors: </span>
                            <span>{data.Actors}</span>
                        </div>
                        <div>
                            <span>Genre: </span>
                            <span>{data.Genre}</span>
                        </div>
                        <div>
                            <span>Languages: </span>
                            <span>{data.Language}</span>
                        </div>
                        <div>
                            <span>Awards: </span>
                            <span>{data.Awards}</span>
                        </div>
                        <div>
                            <span>Box-office: </span>
                            <span>{data.BoxOffice}</span>
                        </div>
                    </div>
                    
                </div>
                <div className='section-right'>
                    <img src={data.Poster} alt={data.Title}/>
                </div>
                    </>
                )
            }
            
        </div>
    );
};

export default MovieDetail;