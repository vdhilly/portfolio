import { Link } from "react-router-dom";

function NavList(){
    return (
        <ul className="nav-list">
            <li className="nav-item">
                <a href="#works">Réalisations</a>
            </li>
            <li className="nav-item">
                <Link className="btn btn-outline" to="mailto:valentin62680@hotmail.fr"><span>Contact</span></Link>
            </li>
        </ul>
    )
}

export default NavList