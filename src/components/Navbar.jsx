import { Link } from "react-router-dom";
import HomeIcon from "../assets/home.png";

function Navbar(prop) {
    return (
        <>
            <nav>
                <ul className="container">
                    <li>
                        {prop.element}
                    </li>
                    <li className="cursor-pointer">
                        <Link to={"/"}>
                            <img className="home-icon" src={HomeIcon} />
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;