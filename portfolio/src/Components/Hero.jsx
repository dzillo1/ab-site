import HeroImage from "../Components/HeroImage.jsx"

function Hero(){
    return(
        <div className="hero top-pad">
            <div className="container-fluid">
                <div className="row flex-column flex-md-row align-items-center gap-3 gap-md-0">
                    <div className="col">
                        <h1>Andrew Borzillo</h1>
                        <h2><em>Front-End Designer & Developer</em></h2>
                        <h4>
                        <strong>Hi, I'm Andrew—most people call me Drew.</strong><br/>
                        I'm a Front-End Designer and Developer with 15+ years of experience creating responsive, user-focused web applications. I specialize in HTML, CSS, JavaScript, and modern frameworks like Vue.js and React. I combine design sensibility with technical expertise to craft intuitive digital experiences. I enjoy working collaboratively to deliver high-quality solutions that elevate user engagement.
                        </h4>
                    </div>
                    <div className="col text-center">
                       <HeroImage />
                    </div>
                </div>
            </div>
        </div>
        )
}
export default Hero;