import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function MovieDetails() {

    const movie = useSelector(store => store.movie)
    const genres = useSelector(store => store.genres)

    const history = useHistory();

    const backToHome = () => {
        history.push('/')
    }

    return (
        <>
            {genres &&
                genres.map((genre) => {
                    return (
                        <div >
                            <p>{genre.name}</p>
                        </div>

                    )
                })}

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


export default MovieDetails;