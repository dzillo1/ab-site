import HeroImage from "../Components/HeroImage.jsx"

function Hero(){
    return(
        <div className="hero top-pad">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-6">
                        <h1>Andrew Borzillo</h1>
                        <h2><em>Front End Designer/Developer</em></h2>
                        <p>Hi, my name is Andrew Borzillo but you can call me Drew.<br/>
                        I am an experienced Front-End Developer with over 10 years of expertise in crafting responsive and user-centric web applications. Proficient in HTML, CSS, JavaScript, and modern frameworks like Vue.js and React. Adept at collaborating with cross-functional teams to deliver high-quality digital solutions that enhance user engagement.</p>
                    </div>
                    <div className="col-12 col-md-6 text-center">
                       <HeroImage />
                    </div>
                </div>
            </div>
        </div>
        )
}
export default Hero;