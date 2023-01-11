import React from "react";
import "./styles/button.css";
import { ButtonProps } from "./types";
import { Colors } from "../assets/Colors/Colors";
function Button({ label, style, lineButton }: ButtonProps) {
  return (
    <div
      style={{
        ...style,
        marginLeft: lineButton ? "auto" : 0,
        marginRight: lineButton ? "auto" : 0,
        backgroundColor: lineButton ? "transparent" : Colors.primary,
        borderBottom: lineButton ? `1px solid ${Colors.primary}` : "none",
        borderRadius: lineButton ? 0 : 10,
      }}
      className="button_container"
    >
      <span
        style={{
          color: lineButton ? Colors.primary : Colors.white,
          fontWeight: lineButton ? "bold" : "normal",
        }}
      >
        {label}
      </span>
    </div>
  );
}

export default Button;
