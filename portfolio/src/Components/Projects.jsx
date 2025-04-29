import { motion } from "framer-motion";

function Projects(){
    return(
        <motion.div 
        className="container top-pad"
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "-100%", opacity: 0 }}
        transition={{ duration: 0.5 }}
        >
            <h1>Projects</h1>
        </motion.div>
    );
}

export default Projects