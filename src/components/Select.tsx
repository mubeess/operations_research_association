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
  disabled,
  onChange,
  id,
  name
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

      <select name={name} id={id} onChange={(e)=>onChange(e)} style={{
        backgroundColor:disabled?'var(--back_ground)':'white'
      }} disabled={disabled} defaultValue={placeholder}>
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
