/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useFormik } from "formik";
import * as Yup from "yup";

import newWindowIcon from "../../../images/new-window-link.svg";

const Step3 = (props) => {
  const { email, nextStep } = props;

  const formik = useFormik({
    initialValues: {
      code: "",
    },
    validationSchema: Yup.object().shape({
      code: Yup.string()
        .min(6, "Must be at least 6 characters")
        .required("Please enter code."),
    }),
    onSubmit: () => {
      nextStep();
    },
  });

  return (
    <div className="modal-step3">
      <div className="modal-header">
        <p>Step 3 of 3</p>
        <h1>Check your inbox for your single-use code.</h1>
        <p style={{ margin: 0 }}>
          Let’s get you verified. We sent an email to{" "}
          <b>{email !== "" ? email : "testEmail@salesforce.com"}</b>
        </p>
      </div>

      <form onSubmit={formik.handleSubmit}>
        <div className="modal-input">
          <label htmlFor="code">Single-use code</label>
          <input
            type="text"
            value={formik.values.code}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="code"
            maxLength={6}
            className={
              formik.touched.code && formik.errors.code ? "error-input" : ""
            }
          />
          {formik.touched.code && formik.errors.code ? (
            <span className="error-text">{formik.errors.code}</span>
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

export default Step3;
