/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */

import email1 from "../../images/email1.png";
import email2 from "../../images/email2_click.png";
import email3 from "../../images/email3.png";
import email4 from "../../images/email4.png";
import email5 from "../../images/email5_click.png";
import email6 from "../../images/email6.png";

const Email = (props) => {
  const { changeView } = props;

  return (
    <div style={{ position: "relative" }}>
      <img width={"100%"} src={email1} />
      <a className="clickable" onClick={changeView}>
        <img width={"100%"} src={email2} />
      </a>
      <img width={"100%"} src={email3} />
      <img width={"100%"} src={email4} />
      <a className="clickable" onClick={changeView}>
        <img width={"100%"} src={email5} />
      </a>
      <img width={"100%"} src={email6} />
    </div>
  );
};

export default Email;
