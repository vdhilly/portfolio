import { Link } from "react-router-dom";

function Header(){
    return (
        <nav className="nav-section">
            <div className="container">
                <div className="large-nav-menu">
                    <Link className="logo-container" to="/">Valentin Dhilly</Link>
                    <div>
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
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;