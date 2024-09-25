/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import "./header.css";
import hamburgerSVG from "../../images/hamburger.svg";
import logoType from "../../images/salesforce-with-type-logo.svg";
import logoNoType from "../../images/salesforce-no-type-logo.svg";
import globeSVG from "../../images/globe.svg";
import searchSVG from "../../images/search.svg";
import userSVG from "../../images/user.svg";

const Header = (props) => {
  const { signOut, variation } = props;

  return (
    <>
      <div className="nav__placeholder"></div>
      <header className="nav">
        <div className="nav__buffer">
          <div className="nav__container">
            <div className="nav__content">
              <div className="nav__hamburger">
                <img src={hamburgerSVG} />
              </div>
              <div className="nav__logoContainer" onClick={signOut}>
                <img className="nav__logoWords" src={logoType} />
                <img className="nav__logo" src={logoNoType} />
              </div>
              {variation === "2" ? (
                <ul className="nav__itemList nav__hide">
                  <li>Products</li>
                  <li>Industries</li>
                  <li>Customers</li>
                  <li>Learning</li>
                  <li>Support</li>
                  <li className="nav__tablet">Company</li>
                  <li className="nav__tablet">Salesforce+</li>
                  <li className="nav__moreItem">
                    More<span className="nav__moreArrow"></span>
                  </li>
                </ul>
              ) : null}
            </div>
            {variation === "2" ? (
              <div className="nav__utility">
                <ul className="nav__utilityList">
                  <li className="nav__utilityItem">
                    <div className="nav__contact nav__hide">
                      <a href="#">Contact Us</a>
                      <span>1-800-664-9073</span>
                    </div>
                  </li>
                  <li className="nav__utilityItem">
                    <div className="nav__search">
                      <img src={searchSVG} />
                    </div>
                  </li>
                  <li className="nav__utilityItem">
                    <div className="nav__globe">
                      <img src={globeSVG} />
                    </div>
                  </li>
                  <li className="nav__utilityItem">
                    <span className="nav__userImage">
                      <img src={userSVG} />
                    </span>
                    <span className="nav__login"></span>
                  </li>
                </ul>
                <div className="nav__cta">
                  <span>Try for free</span>
                </div>
              </div>
            ) : null}

            {variation !== "2" && (
              <ul className="nav__utilityList">
                <li className="nav__utilityItem">
                  <span className="nav__userImage">
                    <img src={userSVG} />
                  </span>
                  <span className="nav__login">Login</span>
                </li>
              </ul>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
