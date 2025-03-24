// TODO : Modale détails projet
import Work from "./Work"
import works from "./Work/data.json"

function Works(){
    console.log(works)
    return (
        <div className="container project-list-container" id="works">
            <div className="title-filter-container">
            </div>
            <div className="projects-list">
                {works.map(work => (
                    <Work key={work.id} work={work} />
                ))}
            </div> 
        </div>
    )
}

export default Works