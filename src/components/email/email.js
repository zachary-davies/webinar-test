/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */

import "./email.css";

import Speakers from "../speakers/speakers";
import Footer from "../footer/footer";

import gmailLogo from "../../images/gmail.svg";
import email1Clickable from "../../images/email1_clickable.png";
import emailImage from "../../images/email-image.png";
import salesforceLogo from "../../images/salesforce-with-type-logo.svg";

const Email = (props) => {
  const { changeView, variation } = props;

  return (
    <div className="email-container">
      <div className="email-header">
        <img src={gmailLogo} style={{ width: "40px", marginRight: "12px" }} />
        <h1>Gmail</h1>
      </div>
      <div style={{ height: "200px" }}></div>
      {variation === "ondemand" ? (
        <>
          <div
            className="email-content"
            style={{ padding: 0, margin: "0 auto 50px", width: "50%" }}
          >
            <img src={salesforceLogo} style={{ width: "100px" }}></img>
            <h1 style={{ textAlign: "center", margin: "50px 0 100px" }}>
              Launch ordering in no time. Grow revenue big time.
            </h1>
            <img src={emailImage}></img>
            <button
              className="pbc-button"
              data-variant="primary"
              style={{ marginTop: "40px" }}
            >
              Get the playbook
            </button>
            <p style={{ margin: "20px 0" }}>
              Your customers expect easy, personalized buying experiences. At
              the same time, you need ways to speed up time to value and cut
              costs.
            </p>
            <p style={{ margin: "20px 0" }}>
              Whether you're figuring out how to get internal buy-in, or just
              looking for a place to start, our playbook will walk you through
              tips to get your B2B digital storefront up and running in the tech
              industry.
            </p>
            <a style={{ alignSelf: "flex-start" }}>Get the playbook</a>
          </div>
          <div
            className="email-speakers"
            style={{
              backgroundColor: "#F4F4F4",
              padding: "50px 200px 0",
              marginBottom: 0,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h1 style={{ fontSize: "32px" }}>
              Embracing an AI mindset in business and in life
            </h1>
            <p>
              Artificial Intelligence is reshaping how we do business and
              function as a society. Delve into the implications of AI and how
              we can harness its potential responsibly and ethically.
            </p>
            <button
              className="pbc-button"
              data-variant="primary"
              style={{ margin: "40px auto 100px" }}
            >
              Watch now
            </button>
            <Speakers />
          </div>
        </>
      ) : (
        <div className="email-content">
          <img
            src={email1Clickable}
            onClick={changeView}
            style={{ cursor: "pointer" }}
          />
          <p>
            Artificial Intelligence is not just transforming technology; it is
            reshaping how we do business and how we function as a society. We
            all know a bit more about AI than we did 18 months ago, but what
            does it take to go from concept to action - how do we all better
            utilize AI? Join us to delve into the profound implications of AI
            and how we can harness its potential responsibly and ethically.
          </p>
          <div className="email-speakers">
            <Speakers />
            <a onClick={changeView}>Register now</a>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Email;
