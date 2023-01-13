import React from "react";
import "./styles/input.css";
import { RegularText } from "./Common";
import { SelectProps } from "./types";
function Select({
  label,
  placeholder,
  type = "text",
  required = false,
  style,
  options,
}: SelectProps) {
  return (
    <div style={style} className="app_input">
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

      <select defaultValue={placeholder}>
        <option value={placeholder}>{placeholder}</option>
        {options.map((opt: string, index) => (
          <option value={opt} key={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
