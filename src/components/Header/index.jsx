import NavList from "../NavList"
import { Link } from "react-router-dom";

function Header(){
    return (
        <nav className="nav-section">
            <div className="container">
                <div className="large-nav-menu">
                    <Link className="logo-container" to="/">Valentin Dhilly</Link>
                    <div>
                        <NavList />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;