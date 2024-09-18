/* eslint-disable jsx-a11y/alt-text */
import "./speakers.css";
import speakerImg from "../../images/speaker.png";
import speakerImg2 from "../../images/speaker2.png";
import speakerImg3 from "../../images/speaker3.png";

import speakerCompany from "../../images/speaker-company.png";
import speakerCompany2 from "../../images/speaker-company2.png";

const Speakers = () => {
  return (
    <div className="speakers-container">
      <h1>Featured Speakers</h1>
      <div className="speakers-contentContainer">
        <div className="speakers-column">
          <div style={{ display: "flex" }}>
            <img className="speakers-companyImage" src={speakerCompany} />
            <img src={speakerImg} />
          </div>
          <h3>Allie K. Miller</h3>
          <p>Product Marketing Manager</p>
          <p className="speakers-subtext">Salesforce</p>
        </div>

        <div className="speakers-column">
          <div style={{ display: "flex" }}>
            <img className="speakers-companyImage" src={speakerCompany2} />
            <img src={speakerImg2} />
          </div>
          <h3>Adam Alfano</h3>
          <p>Head of Central Platforms</p>
          <p className="speakers-subtext">DPD</p>
        </div>

        <div className="speakers-column">
          <div style={{ display: "flex" }}>
            <img className="speakers-companyImage" src={speakerCompany} />
            <img src={speakerImg3} />
          </div>
          <h3>Ben Pyne</h3>
          <p>Sr. Salesforce Solutions Analyst</p>
          <p className="speakers-subtext">DPD</p>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
