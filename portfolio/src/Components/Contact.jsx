import linkedIn from '../assets/linkedin-icon.svg';

function Contact() {
    return (
        <div 
        id="contact"
        className="container top-pad section"
        >
            <h1 class="mb-4">Contact</h1>
            <p className="d-flex gap-5"><span>email</span> <a href="mailto:dzillo1@gmail.com" className="email-link">dzillo1@gmail.com</a></p>
            <p className="d-flex gap-5"><span>linkedIn</span> <a href="https://www.linkedin.com/in/andrewborzillo"><img src={linkedIn} className="linkedin-icon" alt="linkedin"></img></a></p>
        </div>
    );
}

export default Contact