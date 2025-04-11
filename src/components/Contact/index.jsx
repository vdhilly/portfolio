import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Contact(){
    return (
        <section id="contact">
            <div className="container">
                <h3 className="section-title white-title">Contact</h3>
                <div className="contact-container">
                <div id="contact-email">
                    <address>
                        Besoin de me contacter ? Pas de problème !<br/>
                        Vous pouvez me joindre par email en cliquant sur l'enveloppe ci-dessous :<br/>
                        <a id="email-link" href=" " onclick="openMailer(this);" className="footer-icon" rel="noopener" aria-label="Lien pour me contacter par email">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a><br/>
                        Je tâcherai de vous répondre aussi vite que possible.
                    </address>
                </div>
                <div id="contact-social" >
                    <p >Retrouvez-moi également sur les sites suivants :</p>
                    <p className="icons">
                        <a href="https://www.linkedin.com/in/vdhilly/" target="_blank" rel="noopener" aria-label="Lien vers profil LinkedIn">
                            <span class="sr-only">LinkedIn</span><FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="https://github.com/vdhilly" target="_blank" rel="noopener" aria-label="Lien vers profil GitHub">
                            <span class="sr-only">GitHub</span><FontAwesomeIcon icon={faGithub} />
                        </a>
                    </p>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Contact