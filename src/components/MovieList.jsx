import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchMovies, searchMovies } from "../store/movies/thunk";
import { Link } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import { resetMovies } from "../store/movies/slice";
import loadingIcon from "../assets/loading.png";

function MovieList() {
    const moviesData = useSelector((state) => state.movies);
    const config = useSelector(state => state.configuration); 
    const dispatch = useDispatch();

    const handleLoadMore = () => {
        if (moviesData.search) {
            dispatch(searchMovies({search: moviesData.search, page: moviesData.page +1}))
        } else {
            dispatch(fetchMovies(moviesData.page+1))
        }
    }

    useEffect(() => {
        dispatch(fetchMovies());        

        return () => dispatch(resetMovies())
    }, [])
    return (
        <>
            <section id="movie-list">
                <div className="container">
                    <div className="movie-list">
                        {moviesData.movies.length > 0 && moviesData.movies?.map((movie, index) => (
                            <Link to={`movie/${movie.id}`} key={movie.id}>
                                <div className="movie-item" key={movie.id}>
                                    {config?.imageConfig?.base_url ? 
                                    <img src={`${config?.imageConfig?.base_url}w342${movie.poster_path}`} alt="" className="image-poster" loading="lazy" /> : 
                                    <img src={loadingIcon} alt="loading" loading="lazy" />
                                    }
                                    <div className="movie-item-details">
                                        <div className="heading-rating-group">
                                            <h4 className="movie-heading">{movie.original_title}</h4>
                                            <span>{movie?.vote_average}/10</span>
                                        </div>
                                        <p className="movie-overview">{movie.overview}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                        {!moviesData.loading && moviesData.page < moviesData.total_pages && <button className="load-more" onClick={handleLoadMore}>
                            Load more
                        </button>}
                        {moviesData.movies.length > 0 && moviesData.loading && <button className="load-more">
                            <PulseLoader
                                color={"#4285F4"}
                                loading={moviesData.loading}
                                size={10}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                            />
                        </button>}
                        {
                            moviesData.movies.length === 0 && moviesData.loading && 
                            <PulseLoader
                                color={"#4285F4"}
                                loading={moviesData.loading}
                                size={10}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                            />
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default MovieList;