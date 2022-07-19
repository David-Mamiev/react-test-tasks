import { NavLink } from "react-router-dom";

export function NotFoundPage () {
    return (
        <h1 className="not-found">
            Sorry, this page not found =( 
                <br />
            Tap <NavLink to="/">HOME</NavLink> to go to Main page)
        </h1>
    )
}