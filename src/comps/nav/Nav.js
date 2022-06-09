import "./nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div id="nav-bar">
      <div className="nav-logo">
        <NavLink to="/">valerie kardonsky</NavLink>
      </div>
      <div id="nav-items-holder">
        <div className="nav-item">
          <NavLink to="/the-process">the process</NavLink>
        </div>
        <div className="nav-item">
          <NavLink to="/blog">blog</NavLink>
        </div>
        <div className="nav-item">
          <NavLink to="/about-me">about me</NavLink>
        </div>
        <div className="nav-item">
          <NavLink to="/listings">listings</NavLink>
        </div>
        <button className="nav-item nav-button">
          <NavLink to="/contact">contact</NavLink>
        </button>
      </div>
    </div>
  );
};

export default Nav;
