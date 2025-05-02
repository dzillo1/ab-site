import { useState, useEffect } from 'react';
import Logo from '../assets/logo.webp';
import { gsap } from "gsap";

gsap.registerPlugin();

function Navbar() {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [activeLink, setActiveLink] = useState("#home");

    useEffect(() => {
        gsap.to(".logo", { opacity: 0 });
        gsap.to(".logo", { delay: 0.5, duration: 1, opacity: 1 });
        gsap.to(".nav-link", { x: 300 });
        gsap.to(".nav-link", { delay: 1, duration: 1, opacity: 1, x: 0, stagger: 0.3 });
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll("section, div[id]");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveLink(`#${entry.target.id}`);
                    }
                });
            },
            { threshold: 0.6 }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const handleToggle = () => {
        setIsCollapsed(!isCollapsed);
    };

    const handleLinkClick = (link) => {
        setActiveLink(link);
        setIsCollapsed(true);
    };

    return (
        <nav className='navbar navbar-expand-lg fixed-top'>
            <div className="container-fluid">
                <a
                    className="navbar-brand"
                    href="#home"
                    onClick={() => handleLinkClick("#home")}
                >
                    <img src={Logo} alt="ab" className="logo img-fluid" />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded={!isCollapsed}
                    aria-label="Toggle navigation"
                    onClick={handleToggle}
                >
                    <span className="d-block d-lg-none text-white">&#9776;</span>
                </button>

                <div
                    className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`}
                    id="navbarNavAltMarkup"
                >
                    <div className="navbar-nav gap-3">
                        <a
                            href="#home"
                            className={`nav-link ${activeLink === "#home" ? "active" : ""}`}
                            aria-current="page"
                            onClick={() => handleLinkClick("#home")}
                        >
                            Home
                        </a>

                        <a
                            href="#about"
                            className={`nav-link ${activeLink === "#about" ? "active" : ""}`}
                            onClick={() => handleLinkClick("#about")}
                        >
                            About
                        </a>

                        <a
                            href="#projects"
                            className={`nav-link ${activeLink === "#projects" ? "active" : ""}`}
                            onClick={() => handleLinkClick("#projects")}
                        >
                            Projects
                        </a>

                        <a
                            href="#contact"
                            className={`nav-link ${activeLink === "#contact" ? "active" : ""}`}
                            onClick={() => handleLinkClick("#contact")}
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;