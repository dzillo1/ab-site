import emailjs from '@emailjs/browser';
import { useRef } from 'react';

function Contact() {

    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_i47irhj',
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
                <p className="d-flex flex-wrap gap-2"><span className="title"><i class="bi bi-mailbox"></i> Email</span> <a href="mailto:dzillo1@gmail.com" className="contact-link">dzillo1@gmail.com</a></p>
                <p className="d-flex flex-wrap gap-2"><span className="title"><i class="bi bi-linkedin"></i> LinkedIn</span> <a href="https://www.linkedin.com/in/andrewborzillo" className="contact-link" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/andrewborzillo</a></p>
                <p className="d-flex flex-wrap gap-2"><span className="title"><i class="bi bi-pin"></i> Location</span> <a href="https://maps.app.goo.gl/bx3UmqSPMjtn3L716" className="contact-link" target="_blank" rel="noopener noreferrer">Royersford, PA, 19468</a></p>
            </div>
            <div id="messageForm" className="d-flex flex-column gap-3">
                <h3>Send a Message</h3>
                <form ref={form} onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                    <div>
                        <label 
                        className="title" 
                        htmlFor="name">Your Name</label>
                        <input 
                        type="text" 
                        id="name" 
                        className="" 
                        placeholder="John Doe"
                        required />
                    </div>
                    <div>
                        <label 
                        className="title" 
                        htmlFor="name">Your Email</label>
                        <input 
                        type="email" 
                        id="email" 
                        name="email"
                        className="" 
                        placeholder="john@gmail.com"
                        required />
                    </div>
                    <div className="d-flex align-items-center">
                        <label 
                        className="title" 
                        htmlFor="message">Your message</label>
                        <textarea 
                        id="message" 
                        className="" 
                        placeholder="Hello, I would like to talk about..."
                        required />
                    </div>
                    <button 
                    id="submitButton"
                    type="submit"
                    className="w-25"
                    >
                      Send Message <i class="bi bi-arrow-right-short"></i>
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact