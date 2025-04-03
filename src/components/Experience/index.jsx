import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import experience from "./experience.json";

function Experience() {
    return (
        <section id="experience" className="grey-bg">
            <div className="container">
                <h3 className="section-title blue-title">Expériences professionnelles</h3>
                <div className="experience-list">
                    {experience.map(exp => (
                        <div className="job" key={exp.id}>
                            <a href={exp.link}><span>{exp.name}</span><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                            <span>{exp.job}</span>
                            <span>{exp.period}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;
