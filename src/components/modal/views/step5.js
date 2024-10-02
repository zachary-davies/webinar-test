/* eslint-disable jsx-a11y/alt-text */
import { useEffect } from "react";
import ConfettiExplosion from "react-confetti-explosion";

import googleLogo from "../../../images/google_logo.png";
import appleLogo from "../../../images/apple_icon.svg";
import outlookLogo from "../../../images/outlook_logo.png";
import yahooLogo from "../../../images/yahoo_logo.png";

const Step5 = (props) => {
  const { signIn, closeModal, confirmation } = props;

  useEffect(() => {
    signIn();
    if (!confirmation) {
      const timer = setTimeout(() => {
        window.open("https://google.com", "_blank", "noreferrer");
        closeModal();
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [signIn, closeModal, confirmation]);

  return (
    <div className="modal-step5">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ConfettiExplosion
          zIndex={999}
          style={{ paddingLeft: "50px" }}
          force={0.7}
        />
      </div>
      {!confirmation ? (
        <>
          <div className="modal-header">
            <h1>Welcome!</h1>
            <h1 style={{ margin: 0 }}>You are registered.</h1>
            <p>
              In a few seconds we'll automatically log you in to your
              experience.
            </p>
          </div>
          <div className="modal-button">
            <button
              className="pbc-button"
              data-variant="primary"
              onClick={closeModal}
            >
              Continue
            </button>
          </div>{" "}
        </>
      ) : (
        <>
          <div className="modal-header">
            <h1>Welcome!</h1>
            <h1 style={{ margin: 0 }}>You are registered.</h1>
            <p>
              We’ll send a reminder email with a link and details prior to the
              event.
            </p>
          </div>
          <div className="modal-confirmation" style={{ marginTop: "12px" }}>
            <h3>
              How DPD Uses Low Code to Build Apps Fast on the Einstein 1
              Platform
            </h3>
            <span>Jul 16, 9:00 AM – 60 minutes</span>
          </div>
          <h3 style={{ color: "#032D60", textAlign: "center" }}>
            Add to calendar
          </h3>
          <div className="modal-signIn" style={{ margin: "20px 0 40px 0" }}>
            <button>
              <img src={googleLogo} />
              Google
            </button>

            <button>
              <img src={appleLogo} />
              Apple
            </button>

            <button>
              <img src={outlookLogo} />
              Outlook
            </button>

            <button>
              <img src={yahooLogo} />
              Yahoo
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Step5;
