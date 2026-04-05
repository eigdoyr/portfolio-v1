import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => (
  <nav className="top-nav" aria-label="Main navigation">
    <NavLink to="/" className="nav-link text-left">
      Ryodgie
    </NavLink>

    <NavLink to="/projects" className="nav-link text-center">
      Work
    </NavLink>

    <NavLink to="/about" className="nav-link text-center">
      About
    </NavLink>

    <a href="mailto:hello@ryodgie.com" className="nav-link text-right">
      <span className="text-desktop">hello@ryodgie.com</span>
      <span className="text-mobile">Email</span>
    </a>
  </nav>
);

export default Navbar;
