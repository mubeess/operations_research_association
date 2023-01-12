import React from "react";
import "./styles/input.css";
import { RegularText } from "./Common";
import { InputProps } from "./types";
function Input({
  label,
  placeholder,
  type = "text",
  required = false,
}: InputProps) {
  return (
    <div className="app_input">
      <div className="input_label">
        <RegularText
          style={{
            fontSize: 16,
            fontWeight: "600",
            marginBottom: 0,
          }}
          text={`${label}`}
        />
        {required ? <span className="asteric">*</span> : null}
      </div>

      <input required={required} placeholder={placeholder} type={type} />
    </div>
  );
}

export default Input;
