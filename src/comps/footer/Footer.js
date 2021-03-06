import "./footer.css";
import { ReactComponent as MethowLogo } from "../../svg/methow-bluesky-logo.svg";
import {
  InstagramLogo,
  FacebookLogo,
  TwitterLogo,
  LinkedinLogo,
} from "phosphor-react";

const Footer = () => {
  return (
    <div id="footer-holder">
      <MethowLogo />
      <div className="footer-card">
        <p>Valerie Kardonsky</p>
        <p>(206) 310-1036</p>
      </div>
      <div className="footer-line" />
      <div className="footer-card">
        <p>141 Riverside Avenue</p>
        <p>Winthrop, WA 98862</p>
      </div>
      <div className="footer-line" />
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
  );
};

export default Footer;
