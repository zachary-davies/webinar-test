/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import "./modal.css";

import modalLogo from "../../images/salesforce-with-type-logo.svg";
import closeIcon from "../../images/close.svg";

import Step1 from "./views/step1";
import Step2 from "./views/step2";
import Step3 from "./views/step3";
import Step4 from "./views/step4";
import Step5 from "./views/step5";

const Modal = (props) => {
  const { closeModal, signIn, variation } = props;
  const [stepCount, setStepCount] = useState(1);
  const [email, setEmail] = useState("");

  const nextStep = () => {
    setStepCount(stepCount + 1);
  };

  return (
    <div className="modal-container">
      <div className="modal-background" onClick={closeModal} />
      <div className="modal-content">
        <div className="modal-close" onClick={closeModal}>
          <img src={closeIcon} />
        </div>

        <div className="modal-logo">
          <img src={modalLogo} />
        </div>

        <div className="modal-view">
          {stepCount === 1 && (
            <Step1 nextStep={nextStep} setEmail={(e) => setEmail(e)} />
          )}
          {stepCount === 2 && <Step2 nextStep={nextStep} />}
          {stepCount === 3 && <Step3 nextStep={nextStep} email={email} />}
          {stepCount === 4 && variation === "ondemand" && (
            <Step5 signIn={signIn} closeModal={closeModal} />
          )}
          {stepCount === 4 && variation !== "ondemand" && (
            <Step4 nextStep={nextStep} />
          )}
          {stepCount === 5 && (
            <Step5
              signIn={signIn}
              closeModal={closeModal}
              confirmation={variation !== "ondemand"}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
