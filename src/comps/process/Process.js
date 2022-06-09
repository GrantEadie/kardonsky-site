import "./process.css";
import { NavLink, Outlet } from "react-router-dom";

const Process = () => {
  return (
    <div id="process-page-holder">
      <div id="process-page">
        <div id="hero-holder">
          <img
            id="hero-img"
            src="https://images.unsplash.com/photo-1567582701587-c148165275ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80"
            alt="hero-page"
          />
          <div id="hero-text">
            <div id="hero-title">The Process</div>
            <div id="hero-desc">Here's how it all comes together.</div>
          </div>
        </div>
        <div id="process-body">
          <div id="process-tabs">
            <div className="process-tab">
              <NavLink to="buyers">buyers</NavLink>
            </div>
            <div className="process-tab">
              <NavLink to="sellers">sellers</NavLink>
            </div>
            <div className="process-tab">
              <NavLink to="market-trends">market trends</NavLink>
            </div>
          </div>
          <div className="process-cards-holder">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
