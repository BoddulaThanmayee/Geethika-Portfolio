import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <NavLink to="/" className="navbar-logo">
        GM<span>.</span>
      </NavLink>

      <nav className="navbar-links">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/certifications">Certifications</NavLink>
        <NavLink to="/leadership">Leadership</NavLink>
      </nav>

      <NavLink to="/contact" className="contact-button">
        Let's Talk <span>↗</span>
      </NavLink>
    </header>
  );
}

export default Navbar;
