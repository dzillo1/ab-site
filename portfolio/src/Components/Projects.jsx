import ProjectCard from "./ProjectCard";

function Projects(){
    return(
        <section 
        id="projects"
        className="container top-pad section"
        >
            <h1 className="mb-5">Projects</h1>
            <div className="row mb-5">
                    <div className="col-12 d-flex flex-wrap flex-column flex-md-row gap-4">
                        <ProjectCard />
                    </div>
            </div>
            <h4><em>More coming soon</em></h4>
        </section>
    );
}

export default Projects