import React from "react";
import "./styles/alert.css";
export default function Alert({ text }: { text: string }) {
  return (
    <div className={`alert ${text ? "active" : null}`}>
      <span>{text}</span>
    </div>
  );
}
