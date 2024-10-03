/* eslint-disable jsx-a11y/alt-text */
import "./speakers.css";
import speakerImg from "../../images/speaker1.png";
import speakerImg2 from "../../images/speaker2.png";
import speakerImg3 from "../../images/speaker3.png";

import speakerCompany from "../../images/speaker-company.png";
import speakerCompany2 from "../../images/salesforce-with-type-logo.svg";

const Speakers = () => {
  return (
    <div className="speakers-container">
      <h1>Speakers</h1>

      <div className="speakers-contentContainer">
        <div className="speakers-column">
          <div style={{ display: "flex", marginBottom: "20px" }}>
            <div
              className="speakers-speakerImage"
              style={{
                backgroundImage: `url(${speakerImg})`,
              }}
            >
              <div className="speakers-companyImage">
                <img src={speakerCompany} />
              </div>
            </div>
          </div>
          <h3>Adam Hooper</h3>
          <p>Head of Central Platforms</p>
          <p className="speakers-subtext">DPD</p>
        </div>

        <div className="speakers-column">
          <div style={{ display: "flex", marginBottom: "20px" }}>
            <div
              className="speakers-speakerImage"
              style={{
                backgroundImage: `url(${speakerImg2})`,
              }}
            >
              <div className="speakers-companyImage">
                <img src={speakerCompany} />
              </div>
            </div>
          </div>
          <h3>Ben Pyne</h3>
          <p>Sr. Salesforce Solutions Analyst</p>
          <p className="speakers-subtext">DPD</p>
        </div>

        <div className="speakers-column">
          <div style={{ display: "flex", marginBottom: "20px" }}>
            <div
              className="speakers-speakerImage"
              style={{
                backgroundImage: `url(${speakerImg3})`,
              }}
            >
              <div className="speakers-companyImage">
                <img src={speakerCompany2} style={{ maxWidth: "70%" }} />
              </div>
            </div>
          </div>
          <h3>Chloe Coan</h3>
          <p>Product Marketing Manager</p>
          <p className="speakers-subtext">Salesforce</p>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
