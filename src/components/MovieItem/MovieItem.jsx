
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';



function MovieItem({ movie }) {

    const dispatch = useDispatch();
    const history = useHistory();

    const fetchMovie = () => {
        dispatch({
            type: 'FETCH_A_MOVIE',
            payload: movie.id
        })
        dispatch({
            type:'FETCH_GENRES',
            payload: movie.id
        })
        history.push('/details')
    }


    return (
        <div >
            <p>{movie.title}</p>
            <img src={movie.poster}
                onClick={fetchMovie}
                title={movie.title} />
        </div>
    )
}

export default MovieItem;