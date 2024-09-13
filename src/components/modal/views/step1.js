/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */

import { useFormik } from "formik";
import * as Yup from "yup";
import salesForce from "../../../images/salesforce-with-type-logo.svg";
import googleLogo from "../../../images/google_logo.png";
import newWindowIcon from "../../../images/new-window-link.svg";

const Step1 = (props) => {
  const { nextStep, setEmail } = props;

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Invalid email address")
        .required("Please enter email"),
    }),
    onSubmit: () => {
      setEmail(formik.values.email);
      nextStep();
    },
  });

  return (
    <div className="modal-step1">
      <div className="modal-header">
        <h1>Let’s get you registered.</h1>
      </div>

      <div className="modal-signIn">
        <button onClick={nextStep}>
          <img src={googleLogo} />
          Google
        </button>
        <button onClick={nextStep}>
          <img src={salesForce} />
          Salesforce
        </button>
      </div>

      <div className="modal-divider">
        <span>Or</span>
      </div>

      <form onSubmit={formik.handleSubmit}>
        <div className="modal-input">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="email"
            className={
              formik.touched.email && formik.errors.email ? "error-input" : ""
            }
          />
          {formik.touched.email && formik.errors.email ? (
            <span className="error-text">{formik.errors.email}</span>
          ) : null}
        </div>

        <div className="modal-button">
          <button className="pbc-button" data-variant="primary" type="submit">
            Next
          </button>
        </div>
      </form>
      <div className="modal-subtext">
        By continuing, you’ll be creating or accessing a <br />
        <a src="#">
          Trailblazer account
          <img src={newWindowIcon} />
        </a>
      </div>
    </div>
  );
};

export default Step1;
