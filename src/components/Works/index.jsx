// TODO : Modale détails projet
import Work from "./Work"
import works from "./Work/data.json"

function Works(){
    return (
        <div className="grey-bg" id="works">
            <div className="container project-list-container ">
                <h3 className="section-title blue-title">Réalisations</h3>
                <div className="projects-list">
                    {works.map(work => (
                        <Work key={work.id} work={work} />
                    ))}
                </div> 
            </div>
        </div>
    )
}

export default Works