import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';


function Details() {

    const movie = useSelector(store => store.movie)
    const history = useHistory();

    const backToHome = () => {
        history.push('/')
    }

    return (
        <>

            {movie &&
                movie.map((movie) => {
                    return (
                        <div key={movie.id}>
                            <h1>{movie.title} Details </h1>
                            <img src={movie.poster} key={movie.id} />
                            <p>{movie.description}</p>
                            <button onClick={backToHome}>Back</button>
                        </div>
                    )

                })}
        </>

    )
}


export default Details;