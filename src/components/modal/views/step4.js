/* eslint-disable jsx-a11y/anchor-is-valid */
import { useFormik } from "formik";
import * as Yup from "yup";

import phoneValidationSchema from "../../../phoneValidation";

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
      companySize: "",
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string().required("Enter first name."),
      lastName: Yup.string().required("Enter last name."),
      jobTitle: Yup.string().required("Enter title."),
      jobRole: Yup.string(),
      companySize: Yup.string().required("Select company size."),
      company: Yup.string().required("Enter company name."),
      email: Yup.string().email().required("Please enter work email."),
      phone: phoneValidationSchema,
    }),
    onSubmit: () => {
      nextStep();
    },
  });

  return (
    <div className="modal-step4">
      <div className="modal-header">
        <h1>Let&#8217;s get you all signed up</h1>
        <p style={{ margin: 0 }}>We'll need a few details</p>
      </div>

      <form onSubmit={formik.handleSubmit} className="modal-forum">
        {/** First name*/}
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

        {/** Last name*/}
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

        {/** Job title*/}
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

        {/** Job role*/}
        <div className="modal-input">
          <label htmlFor="jobRole">Job role (Optional)</label>
          <select
            name="jobRole"
            value={formik.values.jobRole}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{ color: formik.values.jobRole ? "#000" : "#747474" }}
            className={
              formik.touched.jobRole && formik.errors.jobRole
                ? "error-input"
                : ""
            }
          >
            <option disabled value="">
              Select a job role
            </option>
            <option value="developer">Developer</option>
            <option value="administrator">Administrator</option>
            <option value="architect">Architect</option>
            <option value="sales representative/manager">
              Sales Representative / Manager
            </option>
            <option value="marketer">Marketer</option>
            <option value="service agent/supervisor">
              Service Agent / Supervisor
            </option>
            <option value="data analyst">Data Analyst</option>
            <option value="consultant">Consultant</option>
            <option value="business operations manager">
              Business Operations Manager
            </option>
            <option value="designer">Designer</option>
            <option value="educator">Educator</option>
            <option value="student">Student</option>
            <option value="executive">Executive</option>
            <option value="product manager">Product Manager</option>
          </select>
          {formik.touched.jobRole && formik.errors.jobRole ? (
            <span className="error-text">{formik.errors.jobRole}</span>
          ) : null}
        </div>

        {/** Company name*/}
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

        {/** Company size*/}
        <div className="modal-input">
          <label htmlFor="companySize">Company size</label>
          <select
            name="companySize"
            value={formik.values.companySize}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{ color: formik.values.companySize ? "#000" : "#747474" }}
            className={
              formik.touched.companySize && formik.errors.companySize
                ? "error-input"
                : ""
            }
          >
            <option disabled value="">
              Select a company size
            </option>
            <option value="1-20">1-20 employees</option>
            <option value="21-100">21-100 employees</option>
            <option value="101-500">101-500 employees</option>
            <option value="501-3500">501-3500 employees</option>
            <option value="3501+">3501+ employees</option>
          </select>
          {formik.touched.companySize && formik.errors.companySize ? (
            <span className="error-text">{formik.errors.companySize}</span>
          ) : null}
        </div>

        {/** Work Email*/}
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

        {/** Work Phone*/}
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
