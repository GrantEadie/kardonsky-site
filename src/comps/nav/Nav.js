import "./nav.css";
import { NavLink, useLocation } from "react-router-dom";

const Nav = () => {
  let location = useLocation();
  console.log(location);

  return (
    <div
      id="nav-bar"
      className={
        location.pathname === "/blog" || location.pathname === "/listings"
          ? "nav-black"
          : null
      }
    >
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
