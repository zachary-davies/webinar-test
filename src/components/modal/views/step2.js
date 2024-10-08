/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useFormik } from "formik";
import * as Yup from "yup";

const Step2 = (props) => {
  const { nextStep } = props;

  const formik = useFormik({
    initialValues: {
      country: "USA",
      state: "",
      consent: false,
    },
    validationSchema: Yup.object().shape({
      country: Yup.string().required("Select country/region."),
      state: Yup.string().required("Select state/province."),
      consent: Yup.boolean().oneOf([true], "This field is required"),
    }),
    onSubmit: () => {
      nextStep();
    },
  });

  return (
    <div className="modal-step2">
      <div className="modal-header">
        <p>Step 2 of 3</p>
        <h1>Where are you located?</h1>
        <p style={{ margin: "20px 0 0 0" }}>
          We want to make sure you see the account terms for your area.
        </p>
      </div>

      <form onSubmit={formik.handleSubmit}>
        <div className="modal-input">
          <label htmlFor="country">Country/region</label>
          <select
            name="country"
            value={formik.values.country}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{ color: formik.values.country ? "#000" : "#747474" }}
            className={
              formik.touched.country && formik.errors.country
                ? "error-input"
                : ""
            }
          >
            <option value="" disabled>
              Select country/region
            </option>
            <option default value="USA">
              United States
            </option>
          </select>
          {formik.touched.country && formik.errors.country ? (
            <span className="error-text">{formik.errors.country}</span>
          ) : null}
        </div>

        <div className="modal-input">
          <label htmlFor="state">State/province</label>
          <select
            name="state"
            value={formik.values.state}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{ color: formik.values.state ? "#000" : "#747474" }}
            className={
              formik.touched.state && formik.errors.state ? "error-input" : ""
            }
          >
            <option disabled value="">
              Select state/province
            </option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
          {formik.touched.state && formik.errors.state ? (
            <span className="error-text">{formik.errors.state}</span>
          ) : null}
        </div>

        <div className="modal-checkbox">
          <input
            type="checkbox"
            name="consent"
            value={formik.values.consent}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="consent" style={{ display: "inline" }}>
            I agree to the <a>Main Service Agreement</a> and{" "}
            <a>Salesforce Program Agreement.</a>
          </label>
        </div>

        {formik.touched.consent && formik.errors.consent ? (
          <p className="error-text">{formik.errors.consent}</p>
        ) : null}

        <div className="modal-subtext" style={{ textAlign: "left" }}>
          By registering, you confirm that you agree to the processing of your
          personal data by Salesforce as described in the{" "}
          <a>Privacy Statement</a>.
        </div>

        <div className="modal-button">
          <button className="pbc-button" data-variant="primary" type="submit">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step2;
