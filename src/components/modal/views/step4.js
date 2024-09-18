/* eslint-disable jsx-a11y/anchor-is-valid */
import { useFormik } from "formik";
import * as Yup from "yup";

const Step4 = (props) => {
  const { nextStep } = props;

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      jobTitle: "",
      jobRole: "",
      company: "",
      email: "",
      phone: "",
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string().required("Please enter first name."),
      lastName: Yup.string().required("Please enter last name."),
      jobTitle: Yup.string().required("Please enter job title."),
      jobRole: Yup.string(),
      company: Yup.string().required("Please enter company name."),
      email: Yup.string().email().required("Please enter work email."),
      phone: Yup.string().required("Please enter phone number."),
    }),
    onSubmit: () => {
      nextStep();
    },
  });

  return (
    <div className="modal-step4">
      <div className="modal-header">
        <h1>Let's get you all signed up</h1>
        <p style={{ margin: 0 }}>We'll need a few details</p>
      </div>

      <form onSubmit={formik.handleSubmit} className="modal-forum">
        <div className="modal-input">
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="firstName"
            className={
              formik.touched.firstName && formik.errors.firstName
                ? "error-input"
                : ""
            }
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <span className="error-text">{formik.errors.firstName}</span>
          ) : null}
        </div>

        <div className="modal-input">
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="lastName"
            className={
              formik.touched.lastName && formik.errors.lastName
                ? "error-input"
                : ""
            }
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <span className="error-text">{formik.errors.lastName}</span>
          ) : null}
        </div>

        <div className="modal-input">
          <label htmlFor="jobTitle">Job title</label>
          <input
            type="text"
            value={formik.values.jobTitle}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="jobTitle"
            className={
              formik.touched.jobTitle && formik.errors.jobTitle
                ? "error-input"
                : ""
            }
          />
          {formik.touched.jobTitle && formik.errors.jobTitle ? (
            <span className="error-text">{formik.errors.jobTitle}</span>
          ) : null}
        </div>

        <div className="modal-input">
          <label htmlFor="jobRole">Job role (Optional)</label>
          <select
            name="jobRole"
            value={formik.values.jobRole}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{ color: formik.values.country ? "#000" : "#747474" }}
            className={
              formik.touched.jobRole && formik.errors.jobRole
                ? "error-input"
                : ""
            }
          >
            <option disabled value="">
              Select a job role
            </option>
            <option value="finance">Finance</option>
            <option value="retail">Retail</option>
            <option value="healthcare">Healthcare</option>
            <option value="construction">Construction</option>
            <option value="education">Education</option>
            <option value="technology">Technology</option>
            <option value="manufacturing">Manufacturing</option>
            <option value="other">Other</option>
          </select>
          {formik.touched.jobRole && formik.errors.jobRole ? (
            <span className="error-text">{formik.errors.jobRole}</span>
          ) : null}
        </div>

        <div className="modal-input">
          <label htmlFor="company">Company name</label>
          <input
            type="text"
            value={formik.values.company}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="company"
            className={
              formik.touched.company && formik.errors.company
                ? "error-input"
                : ""
            }
          />
          {formik.touched.company && formik.errors.company ? (
            <span className="error-text">{formik.errors.company}</span>
          ) : null}
        </div>

        <div className="modal-input">
          <label htmlFor="email">Work email</label>
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

        <div className="modal-input">
          <label htmlFor="phone">Work phone</label>
          <input
            type="tel"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="phone"
            className={
              formik.touched.phone && formik.errors.phone ? "error-input" : ""
            }
          />
          <span className="modal-subLabel">
            Format: +Country Code 123 456 7890
          </span>{" "}
          <br />
          {formik.touched.phone && formik.errors.phone ? (
            <span className="error-text">{formik.errors.phone}</span>
          ) : null}
        </div>

        <div
          className="modal-subtext"
          style={{ flex: "1 0 100%", textAlign: "left" }}
        >
          <p>
            Your name may be displayed to other participants during live events.
          </p>
          <p>
            By registering, I agree to the processing of my personal data by
            Salesforce as described in the <a>Privacy Statement.</a>
          </p>
        </div>

        <div className="modal-button" style={{ flex: "1 0 100%" }}>
          <button className="pbc-button" data-variant="primary" type="submit">
            Complete registration
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step4;
