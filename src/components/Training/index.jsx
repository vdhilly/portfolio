import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import training from "../Training/training.json"
import { faGraduationCap, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"

function Formation(){
    return (
        <section id="training">
            <div className="container">
                <h3 className="section-title blue-title">Formations</h3>
                <div className="training-list">
                    {training.map(train => {
                        return (
                            <div className="training" key={train.id}>
                                <span className="title" href={train.link}>{train.name}</span>
                                <p className="subtitle"><span><FontAwesomeIcon icon={faGraduationCap}/>{train.qualification}</span><span><FontAwesomeIcon icon={faMapMarkerAlt}/>{train.school}</span></p>
                                <p className="description">{train.description}</p>
                                <button type="button"></button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Formation