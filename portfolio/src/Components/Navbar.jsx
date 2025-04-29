import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo.webp';

function Navbar() {
    return (
        <nav className='navbar navbar-expand-lg'>
            <div className="container-fluid">
            <NavLink to="/" className="navbar-brand" href="/"><img src={Logo} alt="ab" className="logo img-fluid"/></NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav gap-3">
                        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")} aria-current="page">Home</NavLink>
                        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")} viewTransition>About</NavLink>
                        <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>Projects</NavLink>
                        <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink>
                    </div>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;