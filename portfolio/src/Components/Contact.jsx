import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Contact() {

    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_qq2jfdq',
            'template_3byyvkh',
            form.current,
            'Rg4jqsWSU9hjpwBEH'
        )
        .then((result) => {
            console.log('Message sent:', result.text);
            alert('Message sent successfully!');
        })
        .catch((error) => {
            console.error('Error:', error.text);
            alert('Failed to send the message. Please try again.');
        });
    };

    return (
        <section 
        id="contact"
        className="container top-pad section"
        >
            <h1 className="mb-4">Contact</h1>
            <div className="d-flex flex-column gap-4 mb-5">
                <p className="d-flex flex-wrap gap-2"><span className="title"><i className="bi bi-mailbox"></i> Email</span> <a href="mailto:dzillo1@gmail.com" className="contact-link">dzillo1@gmail.com</a></p>
                <p 
                    className="d-flex flex-wrap gap-2">
                    <span className="title">
                        <i className="bi bi-linkedin"></i> LinkedIn
                    </span> 
                    <a 
                    href="https://www.linkedin.com/in/andrewborzillo" 
                    className="contact-link linkedin" 
                    target="_blank" 
                    rel="noopener noreferrer">https://www.linkedin.com/in/andrewborzillo</a>
                </p>
                <p className="d-flex flex-wrap gap-2"><span className="title"><i className="bi bi-pin"></i> Location</span> <a href="https://maps.app.goo.gl/bx3UmqSPMjtn3L716" className="contact-link" target="_blank" rel="noopener noreferrer">Royersford, PA, 19468</a></p>
            </div>
            <div id="messageForm" className="d-flex flex-column gap-3">
                <h3>Send a Message</h3>
                <form 
                ref={form} 
                onSubmit={handleSubmit} 
                className="d-flex flex-column gap-3">

                    <FloatingLabel
                        controlId="name"
                        type="text"
                        label="Your name"
                        className="mb-3"
                        required
                    >
                        <Form.Control type="email" placeholder="First Last" />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="email"
                        type="email"
                        label="Email address"
                        className="mb-3"
                        required
                    >
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="message"
                        label="Message"
                        className="mb-3"
                        required
                    >
                        <Form.Control as="textarea" placeholder="Leave a message here" />
                    </FloatingLabel>

                    <button 
                    id="submitButton"
                    type="submit"
                    className=""
                    >
                      Send <i className="bi bi-arrow-right-short"></i>
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact