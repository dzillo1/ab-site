import HeroImage from "../Components/HeroImage.jsx"

function Hero(){
    return(
        <div className="hero top-pad">
            <div className="container-fluid">
                <div className="row flex-column flex-md-row align-items-center gap-3 gap-md-0">
                    <div className="col">
                        <h1>Andrew Borzillo</h1>
                        <h2 className="mb-5"><em>Commercial Lines Underwriting Candidate | P&C Licensing in Progress</em></h2>
                        <h4>
                        <strong>Hi, I'm Andrew—most people call me Drew.</strong><br/>
                        I'm pursuing a career in commercial property & casualty underwriting, currently completing my P&C licensing. I bring a strong background in analytical judgment, process evaluation, and criteria-based decision support within structured, regulated environments.
                        <br/><br/>My professional experience includes evaluating complex information against defined standards, identifying risk and inconsistencies, maintaining documentation accuracy, and supporting sound operational decisions—skills that translate directly to commercial underwriting.
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