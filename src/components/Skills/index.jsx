import jsLogo from "../../assets/technologies/javascript.png"
import jqueryLogo from "../../assets/technologies/jquery.webp"
import reactLogo from "../../assets/technologies/react.png"
import cssLogo from "../../assets/technologies/css.png"
import htmlLogo from "../../assets/technologies/html.png"
import sassLogo from "../../assets/technologies/sass.png"
import expressLogo from "../../assets/technologies/expressjs.png"
import nodeLogo from "../../assets/technologies/nodejs.png"
import phpLogo from "../../assets/technologies/php.png"
import gitLogo from "../../assets/technologies/git.png"
import githubLogo from "../../assets/technologies/github.png"
import vscLogo from "../../assets/technologies/vsc.png"
import wsLogo from "../../assets/technologies/ws.png"
import npmLogo from "../../assets/technologies/npm.png"
import mongodbLogo from "../../assets/technologies/mongodb.webp"
import mysqlLogo from "../../assets/technologies/mysql.png"
import PSLogo from "../../assets/technologies/PS.png"
import IDLogo from "../../assets/technologies/ID.png"

function Skills(){

    return (
        <div className="container skills-container">
            <h3 className="section-title blue-title">Compétences</h3>
            <div className="">
                <div className="skills-header">
                    <span className="skills-header-title">Développement</span>
                </div>
                <div className="skills-lists-container">
                    <div className="skills-frontend margin-5 padding-4">
                        <span className="skills-header-subtitle">Frontend</span>
                        <div className="skills-list">
                            <div className="icon-container">
                                <img className="icon" src={jsLogo} alt=""/>
                            </div>
                            <div className="icon-container">
                                <img className="icon" src={jqueryLogo} alt=""/>
                            </div>
                            <div className="icon-container">
                                <img className="icon" src={reactLogo} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="skills-backend margin-5 padding-4">
                        <span className="skills-header-subtitle">Backend</span>
                        <div className="skills-list">
                            <div className="icon-container">
                                <img className="icon" src={nodeLogo} alt=""/>
                            </div>
                            <div className="icon-container">
                                <img className="icon" src={expressLogo} alt=""/>
                            </div>
                            <div className="icon-container">
                                <img className="icon" src={phpLogo} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="skills-integration margin-5 padding-4">
                        <span className="skills-header-subtitle">Intégration</span>
                        <div className="skills-list">
                            <div className="icon-container">
                                <img className="icon" src={htmlLogo} alt=""/>
                            </div>
                            <div className="icon-container">
                                <img className="icon" src={cssLogo} alt=""/>
                            </div>
                            <div className="icon-container">
                                <img className="icon" src={sassLogo} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="skills-bdd margin-5 padding-4">
                        <span className="skills-header-subtitle">Base de données</span>
                        <div className="skills-list">
                            <div className="icon-container">
                                <img className="icon" src={mysqlLogo} alt=""/>
                            </div>
                            <div className="icon-container">
                                <img className="icon" src={mongodbLogo} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container skills-container">
                <div className="skills-header">
                    <span className="skills-header-title">Outils</span>
                </div>
                <div className="skills-lists-container">
                    <div className="skills-vcs margin-5 paddin-4">
                        <span className="skills-header-subtitle">VCS</span>
                        <div className="skills-list">
                            <div className="icon-container">
                                <img className="icon" src={gitLogo} alt=""/>
                            </div>
                            <div className="icon-container">
                                <img className="icon" src={githubLogo} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="skills-conception margin-5 paddin-4">
                        <span className="skills-header-subtitle">Conception</span>
                        <div className="skills-list">
                            <div className="icon-container">
                                <img className="icon" src={PSLogo} alt=""/>
                            </div>
                            <div className="icon-container">
                                <img className="icon" src={IDLogo} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="skills-environment margin-5 paddin-4">
                        <span className="skills-header-subtitle">Environnement</span>
                        <div className="skills-list">
                            <div className="icon-container">
                                <img className="icon" src={vscLogo} alt=""/>
                            </div>
                            <div className="icon-container">
                                <img className="icon" src={wsLogo} alt=""/>
                            </div>
                            <div className="icon-container">
                                <img className="icon" src={npmLogo} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills