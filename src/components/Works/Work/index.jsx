function Work({work}){
    const { name, subtitle, image, skills } = work
    return (
        <div className="project-item">
            <a></a>
            <div className="card-text">
                <h3 className="project-title">{name}</h3>
            </div>
        </div>
    )
}

export default Work