import Navbar from "../components/Navbar";
import MovieList from "../components/MovieList";
import SearchInput from "../components/SearchInput";

function Home() {
    return (
        <>
            <Navbar element={<SearchInput />} />
            <MovieList />
        </>
    )
}

export default Home;