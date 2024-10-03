/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */

import "./email.css";

import Speakers from "../speakers/speakers";
import gmailLogo from "../../images/gmail.svg";
import email1Clickable from "../../images/email1_clickable.png";
import Footer from "../footer/footer";

const Email = (props) => {
  const { changeView } = props;

  return (
    <div className="email-container">
      <div className="email-header">
        <img src={gmailLogo} style={{ width: "40px", marginRight: "12px" }} />
        <h1>Gmail</h1>
      </div>
      <div style={{ height: "200px" }}></div>
      <div className="email-content">
        <img
          src={email1Clickable}
          onClick={changeView}
          style={{ cursor: "pointer" }}
        />
        <p>
          Artificial Intelligence is not just transforming technology; it is
          reshaping how we do business and how we function as a society. We all
          know a bit more about AI than we did 18 months ago, but what does it
          take to go from concept to action - how do we all better utilize AI?
          Join us to delve into the profound implications of AI and how we can
          harness its potential responsibly and ethically.
        </p>
        <div className="email-speakers">
          <Speakers />
          <a onClick={changeView}>Register now</a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Email;
