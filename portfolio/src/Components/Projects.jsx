import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

function Projects(){
    return(
        <motion.div 
        id="projects"
        className="container top-pad"
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "-100%", opacity: 0 }}
        transition={{ duration: 0.5 }}
        >
            <h1 className="mb-5">Projects</h1>
            <div className="row">
                <div className="col-md-3">
                    <ProjectCard />
                </div>
            </div>
        </motion.div>
    );
}

export default Projects