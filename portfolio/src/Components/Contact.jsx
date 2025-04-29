import linkedIn from '../assets/linkedin-icon.svg';
import { motion } from "framer-motion";

function Contact() {
    return (
        <motion.div 
        className="container top-pad"
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "-100%", opacity: 0 }}
        transition={{ duration: 0.5 }}
        >
            <h1 class="mb-4">Contact</h1>
            <p className="d-flex gap-5"><span>email</span> <a href="mailto:dzillo1@gmail.com" className="email-link">dzillo1@gmail.com</a></p>
            <p className="d-flex gap-5"><span>linkedIn</span> <a href="https://www.linkedin.com/in/andrewborzillo"><img src={linkedIn} className="linkedin-icon" alt="linkedin"></img></a></p>
        </motion.div>
    );
}

export default Contact