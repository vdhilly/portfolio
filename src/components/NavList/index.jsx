import { Link } from "react-router-dom";

function NavList(){
    return (
        <ul className="nav-list">
            <li className="nav-item">
                <Link to="/a-propos">À propos</Link>
            </li>
            <li className="nav-item">
                <Link to="/#works">Réalisations</Link>
            </li>
            <li className="nav-item">
                <Link className="btn btn-outline" to="mailto:valentin62680@hotmail.fr"><span>Contact</span></Link>
            </li>
        </ul>
    )
}

export default NavList