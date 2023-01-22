import React, { HTMLInputTypeAttribute } from "react";
import { CSSProperties } from "styled-components";

export interface TextProps {
  text: string;
  style?: CSSProperties;
}

export interface InputProps {
  label: string;
  placeholder?: string;
  onChange?: () => void;
  type?: HTMLInputTypeAttribute;
  required?: boolean;
  style?:CSSProperties;
  disabled?:boolean;
  outlined?:boolean;
}
export interface SelectProps {
  label: string;
  placeholder?: string;
  onChange?: () => void;
  type?: HTMLInputTypeAttribute;
  required?: boolean;
  style?:CSSProperties;
  options:Array<string>
  disabled?:boolean;
}

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  style?: CSSProperties;
  lineButton?: boolean;
}

export interface NavLinkProps {
  label: string;
  Icon: React.FC;
  route: string;
}

export interface IconProps {
  active?: boolean;
}
