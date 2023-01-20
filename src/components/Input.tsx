import React from "react";
import "./styles/input.css";
import { RegularText } from "./Common";
import { InputProps } from "./types";
function Input({
  label,
  placeholder,
  type = "text",
  required = false,
  style,
  disabled,
  outlined,
}: InputProps) {
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

      <input
        disabled={disabled}
        style={{
          opacity: disabled ? 0.5 : 1,
          backgroundColor: disabled ? "var(--back_ground)" : "var(--white)",
          border: outlined ? "1px solid var(--stroke)" : "none",
          borderBottom: outlined
            ? "1px solid var(--stroke)"
            : "1px solid var(--primary)",
          borderRadius: outlined ? 10 : 0,
          padding:5
        }}
        required={required}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
}

export default Input;
