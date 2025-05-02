
import ProjectCard from "./ProjectCard";

function Projects(){
    return(
        <div 
        id="projects"
        className="container top-pad section"
        >
            <h1 className="mb-5">Projects</h1>
            <div className="row">
                <div className="col-md-3">
                    <ProjectCard />
                </div>
            </div>
        </div>
    );
}

export default Projects