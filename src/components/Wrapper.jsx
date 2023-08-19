import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { fetchConfiguration } from "../store/configuration/thunk";

function Wrapper({children}) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchConfiguration());
    }, [])
    return(<>{children}</>)
}

export default Wrapper;