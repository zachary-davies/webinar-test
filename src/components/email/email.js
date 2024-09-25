/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import emailImage from "../../images/email.png";
import "./email.css";

const Email = (props) => {
  const { changeView } = props;

  return (
    <div style={{ position: "relative" }}>
      <img width={"100%"} src={emailImage} />
      <a
        class="clickable"
        onClick={changeView}
        style={{ left: "310px", bottom: "390px" }}
      >
        <div />
      </a>
      <a
        class="clickable"
        onClick={changeView}
        style={{ left: "600px", top: "505px" }}
      >
        <div />
      </a>
    </div>
  );
};

export default Email;
