import linkedIn from '../assets/linkedIn_icon.svg';

function Contact() {
    return (
        <div className="container">
            <h1>Contact</h1>
            <p>email <a href="">dzillo1@gmail.com</a></p>
            <p>linkedIn <a href="https://www.linkedin.com/in/andrewborzillo"><img src={linkedIn} alt="linkedin"></img></a></p>
        </div>
    );
}

export default Contact