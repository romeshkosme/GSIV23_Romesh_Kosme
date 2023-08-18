import HomeIcon from "../assets/home.png";

function Navbar() {
    return (
        <>
            <nav>
                <ul className="container">
                    <li>
                        search
                    </li>
                    <li className="cursor-pointer">
                        <img className="home-icon" src={HomeIcon} />
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;