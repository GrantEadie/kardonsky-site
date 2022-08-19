import "./nav.css";
import { NavLink, useLocation } from "react-router-dom";

const Nav = () => {
  let location = useLocation();

  return (
    <div
      id="nav-bar"
      className={location.pathname === "/" ? "nav-bar-home" : null}
    >
      <div className="nav-logo">
        <NavLink to="/">vk</NavLink>
      </div>
      <div id="nav-items-holder">
        <div className="nav-item">
          <NavLink to="/about-me">about</NavLink>
        </div>
        <div className="nav-item">
          <NavLink to="/the-process">the process</NavLink>
        </div>
        <div className="nav-item">
          <NavLink to="/blog">blog</NavLink>
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
