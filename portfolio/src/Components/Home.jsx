import Hero from './Hero';
import { motion } from "framer-motion";

function Home() {
    return (
        <motion.div
        className="container"
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "-100%", opacity: 0 }}
        transition={{ duration: 0.5 }}
        >
            <Hero/>
        </motion.div>
    );
}

export default Home