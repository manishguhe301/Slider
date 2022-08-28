import React, { useState } from "react";

const CheckBox = ({
  checkA,
  setCheckA,
  checkB,
  setCheckB,
  checkC,
  setCheckC,
  text,
}) => {
  const [checked, setChecked] = useState(true);

  const changeTogglers = () => {
    if (!checkA) {
      setCheckA(true);
      if (checkB && checkC) {
        let result = Math.floor(Math.random() * (3 - 1)) + 1;
        if (result === 1) {
          setCheckB(false);
        } else {
          setCheckC(false);
        }
      }
    } else {
      setCheckA(false);
    }
  };
  return (
    <>
      <div className="d-flex  flex-column align-items-center">
        <div className="form-check form-switch mt-3 display-5 mb-5 ms-2">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onChange={() => setChecked(!checked)}
            checked={checkA}
            onClick={changeTogglers}
          />
          <label>{text}</label>
        </div>
      </div>
    </>
  );
};

export default CheckBox;
