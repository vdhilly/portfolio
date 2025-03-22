import jsLogo from "../../assets/technologies/javascript.png"
import jqueryLogo from "../../assets/technologies/jquery.webp"
import reactLogo from "../../assets/technologies/react.png"

function Skills(){

    return (
        <div className="container skills-container">
            <div className="skills-header">
                <span className="skills-header-title">Développement</span>
            </div>
            <div className="skills-lists-container">
                <div className="skills-frontend">
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
                <div className="skills-backend">
                    <span className="skills-header-subtitle">Backend</span>
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
                <div className="skills-integration">
                    <span className="skills-header-subtitle">Intégration</span>
                </div>
            </div>
        </div>
    )
}

export default Skills