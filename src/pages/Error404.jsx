import { Link } from "react-router-dom"

function PageNotFound() {
    return (
        <>
            <div className="page-not-found">
                <h1>Error 404</h1>
                <h2>Page not found</h2>
                <Link to={"/"}>
                    <h4>Go to home</h4>
                </Link>
            </div>
        </>
    )
}

export default PageNotFound