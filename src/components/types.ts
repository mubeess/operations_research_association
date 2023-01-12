import { HTMLInputTypeAttribute } from "react";
import { CSSProperties } from "styled-components";

export interface TextProps {
  text: string;
  style?: CSSProperties;
}

export interface InputProps {
  label: string;
  placeholder?: string;
  onChange?: () => void;
  type?:HTMLInputTypeAttribute;
  required?:boolean;
}

export interface ButtonProps {
  label: string;
  onClick?: ()=>void;
  style?: CSSProperties;
  lineButton?: boolean;
}
