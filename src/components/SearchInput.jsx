import SearchIcon from "../assets/search.png";
import { useEffect, useRef } from "react";
import { resetMovies, setSearch } from "../store/movies/slice";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, searchMovies } from "../store/movies/thunk";

function SearchInput() {
    const moviesData = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const prevSearchRef = useRef("");

    useEffect(() => {
        // debounce
        const lastState = prevSearchRef.current;
        const timer = setTimeout(() => {
            if (moviesData.search) {
                dispatch(resetMovies())
                dispatch(searchMovies({search: moviesData?.search}))
            } else if (!moviesData.search && lastState) {
                dispatch(resetMovies())
                dispatch(fetchMovies())
            }
        }, 800)
        prevSearchRef.current = moviesData.search;
        return () => clearTimeout(timer)
    }, [moviesData.search]);

    return(
        <>
            <div className="search-input-group">
                <img src={SearchIcon} />
                <input type="text" name="search" id="search" placeholder="Search" autoComplete="off" value={moviesData?.search} onChange={(e) => dispatch(setSearch(e.target.value))} />
            </div>
        </>
    )
}

export default SearchInput;