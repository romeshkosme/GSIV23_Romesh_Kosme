import SearchIcon from "../assets/search.png";
import { useEffect, useState } from "react";
import { debounce } from "../utils/commonUtils";
import { useDispatch } from "react-redux";
import { searchMovies } from "../store/movies/thunk";

function SearchInput() {
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        if(search) {
            debounce(() => dispatch(searchMovies({search})))
        } else {
            console.log("reset movie list")
        }
    }, [search]);
    return(
        <>
            <div className="search-input-group">
                <img src={SearchIcon} />
                <input type="text" name="search" id="search" placeholder="Search" autoComplete="off" onChange={(e) => setSearch(e.target.value)} />
            </div>
        </>
    )
}

export default SearchInput;