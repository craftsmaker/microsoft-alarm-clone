import React from "react";
import {CheckboxWrapper} from "./styles";

export default React.memo(({ checked, onClick }) => {
  return (
    <CheckboxWrapper
      onClick={onClick}
    >
      <input
        type="checkbox"
        className="checkboxInput"
        defaultChecked={checked}
      />
      <span className="checkboxCustomizedInput">
        <span
          className="check"
          style={{
            display: checked ? "block" : "none",
          }}
        ></span>
      </span>
    </CheckboxWrapper>
  );
});
