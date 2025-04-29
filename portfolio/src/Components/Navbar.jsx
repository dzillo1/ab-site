import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../assets/logo.webp';

function Navbar() {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const handleToggle = () => {
        setIsCollapsed(!isCollapsed);
    };

    const handleLinkClick = () => {
        setIsCollapsed(true); // Collapse the navbar when a link is clicked
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
            <span className="navbar-toggler-icon"></span>
            </button>

                <div 
                className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`}id="navbarNavAltMarkup"
                >
                    <div className="navbar-nav gap-3">
                        <NavLink 
                        to="/" 
                        className={({ isActive }) => (isActive ? "active" : "")} aria-current="page"
                        onClick={handleLinkClick}
                        >Home</NavLink>
                        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}
                        onClick={handleLinkClick} 
                        >About</NavLink>
                        <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")}
                        onClick={handleLinkClick}
                        >Projects</NavLink>
                        <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}
                        onClick={handleLinkClick}
                        >Contact</NavLink>
                    </div>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;