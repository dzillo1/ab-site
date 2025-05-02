import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Logo from '../assets/logo.webp';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function Navbar() {

    useEffect(() => {
        gsap.to(".logo", { opacity: 0 } );
        gsap.to(".logo", {delay:.5, duration:1, opacity: 1 } );
        gsap.to(".nav-link", {x: 300});
        gsap.to(".nav-link", {delay:1, duration:1, opacity: 1, x:0, stagger: 0.3 } );
      }, []);
        
    const [isCollapsed, setIsCollapsed] = useState(true);

    const handleToggle = () => {
        setIsCollapsed(!isCollapsed);
    };

    const handleLinkClick = () => {
        setIsCollapsed(true);
    };

    return (
        <nav className='navbar navbar-expand-lg fixed-top'>
            <div className="container-fluid">
            <NavLink to="/" className="navbar-brand" href="/"><img src={Logo} alt="ab" className="logo img-fluid"/></NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" 
            aria-expanded={!isCollapsed} 
            aria-label="Toggle navigation"
            onClick={handleToggle}
            >
            <span className="d-block d-lg-none text-white">&#9776;</span>
            </button>

                <div 
                className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`}id="navbarNavAltMarkup"
                >
                    <div className="navbar-nav gap-3">
                        <NavLink 
                        to="/" 
                        className={({ isActive }) => `nav-link ${isActive ? "active" : ""} nav-link`}  
                        aria-current="page"
                        onClick={handleLinkClick}
                        >Home</NavLink>

                        <NavLink to="/about" 
                        className={({ isActive }) => `nav-link ${isActive ? "active" : ""} nav-link`} 
                        onClick={handleLinkClick} 
                        >About</NavLink>

                        <NavLink to="/projects" 
                        className={({ isActive }) => `nav-link ${isActive ? "active" : ""} nav-link`} 
                        onClick={handleLinkClick}
                        >Projects</NavLink>

                        <NavLink to="/contact" 
                        className={({ isActive }) => `nav-link ${isActive ? "active" : ""} nav-link`} 
                        onClick={handleLinkClick}
                        >Contact</NavLink>
                    </div>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;