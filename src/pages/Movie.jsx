import Navbar from "../components/Navbar";
import MovieDetail from "../components/MovieDetail";

function Movie() {
    return (
        <>
            <Navbar element={<h2>Movie Details</h2>} />
            <MovieDetail />
        </>
    )
}

export default Movie;