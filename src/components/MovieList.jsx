import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchMovies } from "../store/movies/thunk";
import { Link } from "react-router-dom";

function MovieList() {
    const moviesData = useSelector((state) => state.movies);
    const config = useSelector(state => state.configuration); 
    //     let image_path = ""
    //     if (state.configuration.imageConfig.base_url) {
    //         image_path = state.configuration.imageConfig.base_url;
    //     }
    //     return {
    //         movies: state.movies.movies,
    //         image_base_url: image_path
    //     }
    // });
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovies());        
    }, [])
    return (
        <>
            <section id="movie-list">
                <div className="container">
                    <div className="movie-list">
                        {moviesData.movies.length > 0 && moviesData.movies?.map((movie, index) => (
                            <Link to={`movie/${movie.id}`} key={movie.id}>
                                <div className="movie-item" key={movie.id}>
                                    <img src={`${config?.imageConfig?.base_url}w342${movie.poster_path}`} alt="" className="image-poster" loading="lazy" />
                                    <div className="movie-item-details">
                                        <h4 className="movie-heading">{movie.original_title}</h4>
                                        <p className="movie-overview">{movie.overview}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default MovieList;