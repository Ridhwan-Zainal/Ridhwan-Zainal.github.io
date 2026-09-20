function ProjectCard(props){
    return(
        <article className="project-card">
        <img src={props.image} alt={props.title} />

        <div className="project-info">
            <h3>{props.title}</h3>
            <p>{props.description}</p> 

          <div className="tech-stack">
          {props.technologies.map ((technology)=>(
            <span key={technology}>{technology}</span>
          ))}
          </div>

          <div className="project-actions">
          {props.github && (
            <a 
            className="project-link"
            href={props.github}
            target="_blank"
            rel="noreferrer"
            >
              View on Github  
            </a>
          )} 
        </div>
        </div>
        </article>
    )   
}
export default ProjectCard