import ProfilePicture from "../../assets/VD.jpg"

function Presentation(){
    return (
        <div id="presentation">
            <div className="container presentation-container">
                <h3 className="section-title white-title">Présentation</h3>
                <div className="presentation-details">
                    <div className="about-img">
                        <img src={ProfilePicture} alt="Valentin Dhilly"/>
                    </div>
                    <div className="about-container">
                        <p className="about-text">
                            Après une <strong>license de langues étrangères</strong>, j'ai décidé de me reconvertir dans le monde du développement web.
                        </p>
                        <p className="about-text">
                        Je me suis d'abord <strong>auto-formé</strong> au travers d'un <strong>projet personnel</strong> et suis ensuite entré chez <strong>OpenClassrooms</strong>, grâce à la quelle j'ai pu acquérir de nombreuses compétences. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Presentation