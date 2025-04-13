import React, { useState } from "react";
import gitHubLogo from "../../../assets/technologies/github.png"

function Work({ work }) {
    const { name, subtitle, image, skills, technologies, github } = work;
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="project-item">
            <img src={`/assets/works/${image}`} alt={name} />
            <div className="project-resume">
                <h4 className="project-title">
                    {name.split("-").map((part, index) => (
                        <React.Fragment key={index}>
                            {part}
                            {index < name.split("-").length - 1 && <br />}
                        </React.Fragment>
                    ))}
                </h4>
            </div>
            <button type="button" onClick={() => setIsModalOpen(true)}>
                En savoir plus
            </button>
            {isModalOpen && (
                <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={() => setIsModalOpen(false)}>
                            &times;
                        </button>
                        <h2 className="modal-title">{name}</h2>
                        <p className="modal-subtitle">{subtitle}</p>
                        <ul className="work-modal-technologies">
                            {technologies.map((technology, index) => (
                                <li key={index}>{technology}</li>
                            ))}
                        </ul>
                        <ul className="work-modal-skills">
                            {skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                        <img src={`portfolio/assets/works/${image}`} alt={name} />
                        {github ? (
                            <a className="modale-github-logo" href={github} target="_blank"><img src={gitHubLogo} alt="github"/></a>
                        ) : null}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Work;
