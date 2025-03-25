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

function Skills(){

    return (
        <div>
            <div className="container skills-container">
                <div className="skills-header">
                    <span className="skills-header-title">Développement</span>
                </div>
                <div className="skills-lists-container">
                    <div className="skills-frontend margin-5 padding-4">
                        <span className="skills-header-subtitle">Frontend</span>
                        <div className="skills-list">
                            <div class="icon-container">
                                <img class="icon" src={jsLogo} />
                            </div>
                            <div class="icon-container">
                                <img class="icon" src={jqueryLogo} />
                            </div>
                            <div class="icon-container">
                                <img class="icon" src={reactLogo} />
                            </div>
                        </div>
                    </div>
                    <div className="skills-backend margin-5 padding-4">
                        <span className="skills-header-subtitle">Backend</span>
                        <div className="skills-list">
                            <div class="icon-container">
                                <img class="icon" src={nodeLogo} />
                            </div>
                            <div class="icon-container">
                                <img class="icon" src={expressLogo} />
                            </div>
                            <div class="icon-container">
                                <img class="icon" src={phpLogo} />
                            </div>
                        </div>
                    </div>
                    <div className="skills-integration margin-5 padding-4">
                        <span className="skills-header-subtitle">Intégration</span>
                        <div className="skills-list">
                            <div class="icon-container">
                                <img class="icon" src={htmlLogo} />
                            </div>
                            <div class="icon-container">
                                <img class="icon" src={cssLogo} />
                            </div>
                            <div class="icon-container">
                                <img class="icon" src={sassLogo} />
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
                            <div class="icon-container">
                                <img class="icon" src={gitLogo} />
                            </div>
                            <div class="icon-container">
                                <img class="icon" src={githubLogo} />
                            </div>
                        </div>
                    </div>
                    <div className="skills-conception margin-5 paddin-4">
                        <span className="skills-header-subtitle">Conception</span>
                        <div className="skills-list">
                            <div class="icon-container">
                                <img class="icon" src={jsLogo} />
                            </div>
                            <div class="icon-container">
                                <img class="icon" src={jqueryLogo} />
                            </div>
                            <div class="icon-container">
                                <img class="icon" src={jqueryLogo} />
                            </div>
                        </div>
                    </div>
                    <div className="skills-environment margin-5 paddin-4">
                        <span className="skills-header-subtitle">Environnement</span>
                        <div className="skills-list">
                            <div class="icon-container">
                                <img class="icon" src={vscLogo} />
                            </div>
                            <div class="icon-container">
                                <img class="icon" src={wsLogo} />
                            </div>
                            <div class="icon-container">
                                <img class="icon" src={npmLogo} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills