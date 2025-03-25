import { Link } from "react-router-dom"
import NavList from "../NavList"
import Linkedin from "../../assets/socials/linkedin.svg"

function Footer(){
    return (
        <footer>
            <div className="container footer-container">
                <div className="footer-wrap">
                    <div className="logo">Valentin Dhilly</div>
                    <NavList />
                    <div className="icons-container">
                        <Link className="icon-social-media" to="https://www.linkedin.com/in/vdhilly/">
                            <img src={Linkedin} alt="Linkedin" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer