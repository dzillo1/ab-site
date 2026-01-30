import HeroImage from "../Components/HeroImage.jsx"

function Hero(){
    return(
        <div className="hero top-pad">
            <div className="container-fluid">
                <div className="row flex-column flex-md-row align-items-center gap-3 gap-md-0">
                    <div className="col">
                        <h1>Andrew Borzillo</h1>
                        <h2 className="mb-5"><em>Commercial Lines Underwriting Candidate | Risk Analysis & Decision Support</em></h2>
                        <h4>
                        <strong>Hi, I'm Andrew—most people call me Drew.</strong><br/>
                        I'm transitioning into commercial lines underwriting, currently completing my Property & Casualty insurance licensing, with a strong foundation in analytical thinking, process evaluation, and data-driven decision-making.<br/><br/>I bring 15+ years of professional experience working within structured guidelines, assessing complex information, and supporting high-impact business decisions—skills that directly align with underwriting in commercial insurance.
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