import { motion } from "framer-motion";

function About() {
    return (
        <motion.div 
        id="#about"
        className="container top-pad"
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "-100%", opacity: 0 }}
        transition={{ duration: 0.5 }}
        >
            <div className="row">
                <div className="col-md-6">
                    <h1>About</h1>
                    <p>I started my career in graphic design by gaining my Bachelors degree from Cabrini University. I soon found however that I had a passion for coding and building websites. To follow this newfound interest I obtained a Masters of Science Degree in Instructionl Systems and Technology. I soon found roles showcasing my skills with HTML, CSS and JavaScript. I have worked for Verizon as a Graphic Designer, SuperMedia as SPEC Artist/Mobile Web Support, Vanguard as a UI/UX Interaction Designer/Front End Developer and currently as a Front End Developer for Nutrisystem.</p>
                    <p>As mentioned, I have a passion for web development. This passion makes me look forward everyday to creating, building and learning something new. </p>
                </div>
            </div>
        </motion.div>
    );
}

export default About