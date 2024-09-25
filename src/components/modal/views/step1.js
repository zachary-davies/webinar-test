import React, { useState } from "react";
import IntlTelInput from "intl-tel-input/react";

const errorMap = [
  "Invalid number",
  "Invalid country code",
  "Too short",
  "Too long",
  "Invalid number",
];

const Step1 = (props) => {
  const [isValid, setIsValid] = useState(null);
  const [number, setNumber] = useState(null);
  const [errorCode, setErrorCode] = useState(null);
  const [notice, setNotice] = useState(null);

  const handleSubmit = () => {
    if (isValid) {
      setNotice(`Valid number: ${number}`);
    } else {
      const errorMessage = errorMap[errorCode || 0] || "Invalid number";
      setNotice(`Error: ${errorMessage}`);
    }
  };

  return (
    <form>
      <IntlTelInput
        onChangeNumber={setNumber}
        onChangeValidity={setIsValid}
        onChangeErrorCode={setErrorCode}
        initOptions={{
          initialCountry: "us",
        }}
      />
      <button className="button" type="button" onClick={handleSubmit}>
        Validate
      </button>
      {notice && <div className="notice">{notice}</div>}
    </form>
  );
};

export default Step1;
