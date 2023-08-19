import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMovie } from "../store/movies/thunk";

function MovieDetail() {
    const {id} = useParams()
    const dispatch = useDispatch();
    const moviesData = useSelector((state) => state.movies);
    const config = useSelector(state => state.configuration);

    useEffect(() => {
        if (id) {
            dispatch(fetchMovie(id))
        }
    }, []);

    return (
        <>
            <section id="movie-details">
                <div className="container">
                    <div className="movie-details-group">
                        <div className="movie-details-image">
                            {config?.imageConfig?.base_url && moviesData?.movie?.poster_path && <img src={`${config?.imageConfig?.base_url}w500${moviesData?.movie?.poster_path}`} alt="" loading="lazy" />}
                        </div>
                        <div className="movie-details-content">
                            <h1>{moviesData.movie?.original_title}</h1>
                            <div className="year-length-director-group">
                                <span>{moviesData.movie?.release_date && new Date(moviesData.movie?.release_date).getFullYear()}</span> |
                                <span> {moviesData.movie?.runtime} min</span> | 
                                <span> {moviesData?.credits?.crew?.filter((elem) => elem.known_for_department === "Directing")?.[0]["name"]}</span>
                            </div>
                            <div className="cast-group">
                                <span>Cast: </span>
                                {
                                    moviesData?.credits?.cast &&
                                    moviesData?.credits?.cast.map((cast) => (
                                        <span key={`cast-${cast.cast_id}`}>{cast.name}, </span>
                                    ))
                                }
                            </div>
                            <div className="movie-description">
                                <p>
                                    <span>Description: </span>
                                    {moviesData.movie?.overview}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MovieDetail;