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

const skillsData = {
    Développement: {
        Frontend: [
            { src: jsLogo, alt: "javascript" },
            { src: jqueryLogo, alt: "jquery" },
            { src: reactLogo, alt: "react" },
        ],
        Backend: [
            { src: nodeLogo, alt: "nodejs" },
            { src: expressLogo, alt: "expressjs" },
            { src: phpLogo, alt: "php" },
        ],
        "Intégration": [
            { src: htmlLogo, alt: "html" },
            { src: cssLogo, alt: "css" },
            { src: sassLogo, alt: "sass" },
        ],
        "Base de données": [
            { src: mysqlLogo, alt: "mysql" },
            { src: mongodbLogo, alt: "mongodb" },
        ],
    },
    Outils: {
        VCS: [
            { src: gitLogo, alt: "git" },
            { src: githubLogo, alt: "github" },
        ],
        Conception: [
            { src: PSLogo, alt: "photoshop" },
            { src: IDLogo, alt: "indesign" },
        ],
        Environnement: [
            { src: vscLogo, alt: "vscode" },
            { src: wsLogo, alt: "wampserver" },
            { src: npmLogo, alt: "npm" },
        ],
    },
};

function Skills() {
    return (
        <div className="container skills-container">
            {Object.entries(skillsData).map(([sectionTitle, categories]) => (
                <div key={sectionTitle}>
                    <div className="skills-header">
                        <span className="skills-header-title">{sectionTitle}</span>
                    </div>
                    <div className="skills-lists-container">
                        {Object.entries(categories).map(([categoryTitle, skills]) => (
                            <div key={categoryTitle} className={`margin-5 padding-4 skills-${categoryTitle.toLowerCase().replace(/ /g, '-')}`}>
                                <span className="skills-header-subtitle">{categoryTitle}</span>
                                <div className="skills-list">
                                    {skills.map(({ src, alt }) => (
                                        <div key={alt} className="icon-container" title={alt}>
                                            <img className="icon" src={src} alt={alt}/>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Skills;
