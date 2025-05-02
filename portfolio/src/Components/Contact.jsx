import linkedIn from '../assets/linkedin-icon.svg';

function Contact() {
    return (
        <section 
        id="contact"
        className="container top-pad section"
        >
            <h1 class="mb-4">Contact</h1>
            <div className="d-flex flex-column gap-4">
                <p className="d-flex gap-5"><span className="title">email</span> <a href="mailto:dzillo1@gmail.com" className="email-link">dzillo1@gmail.com</a></p>
                <p className="d-flex gap-5"><span className="title">linkedIn</span> <a href="https://www.linkedin.com/in/andrewborzillo"><img src={linkedIn} className="linkedin-icon" alt="linkedin"></img></a></p>
            </div>
        </section>
    );
}

export default Contact