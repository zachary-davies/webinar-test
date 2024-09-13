/* eslint-disable jsx-a11y/alt-text */
import googleLogo from "../../../images/google_logo.png";
import appleLogo from "../../../images/apple_icon.svg";
import outlookLogo from "../../../images/outlook_logo.png";
import yahooLogo from "../../../images/yahoo_logo.png";

const Step5 = () => {
  return (
    <div className="modal-step5">
      <div className="modal-header">
        <h1>You are registered!</h1>
        <p>
          We'll send a reminder email with a link and details prior to the
          event.
        </p>
      </div>

      <div className="modal-confirmation">
        <h3>
          How DPD Uses Low Code to Build Apps Fast on the Einstein 1 Platform
        </h3>
        <span>Jul 16, 9:00 AM – 60 minutes</span>
      </div>

      <h3 style={{ color: "#032D60", textAlign: "center" }}>Add to calendar</h3>

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
    </div>
  );
};

export default Step5;
