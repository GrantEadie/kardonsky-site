import "./footer.css";
import { ReactComponent as MethowLogo } from "../../svg/methow-bluesky-logo.svg";
import { InstagramLogo, FacebookLogo, TwitterLogo } from "phosphor-react";
import { useNavigate } from "react-router-dom";

const routes = [
  "about-me",
  "the-process",
  "blog",
  "listings",
  "contact",
  "admin",
];

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
        <MethowLogo className="methow-logo" />
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
              <a href="https://www.instagram.com/valeriekardonsky/">
                <InstagramLogo size={32} />
              </a>
              <a href="https://www.facebook.com/MethowValleyBlueSky/">
                <FacebookLogo size={32} />
              </a>
              <a href="https://www.twitter.com/methow_homes/">
                <TwitterLogo size={32} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-text">
        © 2023 Copyright.{" "}
        <a href="https://www.methowvalleyproperties.com/wp-content/uploads/2019/09/DMCA-Notice.pdf">
          DMCA Notice
        </a>
      </div>
    </div>
  );
};

export default Footer;
