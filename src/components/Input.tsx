import React from "react";
import "./styles/input.css";
import { RegularText } from "./Common";
import { InputProps } from "./types";
function Input({label,placeholder}:InputProps) {
  return (
    <div className="app_input">
      <RegularText
        style={{
          fontSize: 16,
          fontWeight: "600",
          marginBottom:0
        }}
        text={label}
      />
      <input placeholder={placeholder} type='email'/>
    </div>
  );
}

export default Input;
