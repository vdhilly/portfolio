import React, { useState } from "react";

function Work({ work }) {
    const { name, subtitle, image, skills, description } = work;
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
                        <h2>{name}</h2>
                        <p>{subtitle}</p>
                        <p>{description}</p>
                        <ul>
                            {skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Work;
