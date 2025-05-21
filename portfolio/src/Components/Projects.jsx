import ProjectCard from "./ProjectCard";

function Projects(){
    return(
        <section 
        id="projects"
        className="container top-pad section"
        >
            <h1 className="mb-3">Projects</h1>
            <p className="mb-5 d-flex gap-5"><span className="title">Github</span> <a href="https://github.com/dzillo1" className="contact-link" target="_blank" rel="noopener noreferrer">https://github.com/dzillo1</a></p>
            <div className="row mb-5">
                    <div className="col-12 d-flex flex-wrap flex-column flex-md-row gap-4 justify-content-center align-items-center align-items-md-stretch">
                        <ProjectCard />
                    </div>
            </div>
            <h4><em>More coming soon</em></h4>
        </section>
    );
}

export default Projects