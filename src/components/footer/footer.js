/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import "./footer.css";
import imgSrc from "../../images/icon-cpra.svg";

const Footer = () => {
  return (
    <div className="footer__bottom">
      <div className="footer__bottomContainer">
        <div className="footer__content">
          <div className="footer__links">
            <ul>
              <li>
                <a href="https://www.salesforce.com/company/legal/">Legal</a>
              </li>
              <li>
                <a href="https://www.salesforce.com/company/legal/sfdc-website-terms-of-service/">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="https://www.salesforce.com/company/privacy/">
                  Privacy Information
                </a>
              </li>
              <li>
                <a href="https://www.salesforce.com/company/disclosure/">
                  Responsible Disclosure
                </a>
              </li>
              <li>
                <a href="https://trust.salesforce.com/en/">Trust</a>
              </li>
              <li>
                <a href="https://www.salesforce.com/company/contact-us/?d=cta-glob-footer-11">
                  Contact
                </a>
              </li>
              <li>
                <a href="#">Cookie Preferences</a>
              </li>
              <li>
                <a href="https://www.salesforce.com/form/other/privacy-request/?d=cta-footer-1">
                  <img className="footer__privacyPill" src={imgSrc} />
                  Your Privacy Choices
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__legal">
            <p>
              © Copyright 2024 Salesforce, Inc.
              <a href="/#" adhocenable="false">
                All rights reserved
              </a>
              . Various trademarks held by their respective owners. Salesforce,
              Inc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
