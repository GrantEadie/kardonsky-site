import "./footer.css";
import { ReactComponent as MethowLogo } from "../../svg/methow-bluesky-logo.svg";
import {
  InstagramLogo,
  FacebookLogo,
  TwitterLogo,
  LinkedinLogo,
} from "phosphor-react";
import { useNavigate } from "react-router-dom";

const routes = ["about-me", "the-process", "blog", "listings", "contact"];

const Footer = () => {
  const navigate = useNavigate();
  const handleClick = (route) => {
    navigate(`/${route}/`);
    window.scrollTo(0, 0);
  };
  return (
    <div id="footer-holder">
      <div id="footer">
        <div className="footer-items-holder-routes">
          {routes.map((route, index) => (
            <h3 key={index} onClick={() => handleClick(route)}>
              {route.split("-").join(" ")}
            </h3>
          ))}
        </div>
        <MethowLogo />
        <div className="footer-items-holder">
          <div className="footer-card">
            <p>Valerie Kardonsky</p>
            <p>(206) 310-1036</p>
          </div>
          <div className="footer-card">
            <p>141 Riverside Avenue</p>
            <p>Winthrop, WA 98862</p>
          </div>
          <div className="footer-card">
            <p>valerie@methowhomes.com</p>
            <div className="footer-socials">
              <InstagramLogo size={32} weight="fill" />
              <FacebookLogo size={32} weight="fill" />
              <TwitterLogo size={32} weight="fill" />
              <LinkedinLogo size={32} weight="fill" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
