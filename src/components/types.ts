import React, { ChangeEvent, HTMLInputTypeAttribute } from "react";
import { CSSProperties } from "styled-components";

export interface TextProps {
  text: string;
  style?: CSSProperties;
}

export interface InputProps {
  label: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: HTMLInputTypeAttribute;
  required?: boolean;
  style?: CSSProperties;
  disabled?: boolean;
  outlined?: boolean;
  id?: string;
  name?: string;
  error?: string;
  value?: string;
}
export interface SelectProps {
  label: string;
  placeholder?: string;
  onChange: (e: ChangeEvent) => void;
  type?: HTMLInputTypeAttribute;
  required?: boolean;
  style?: CSSProperties;
  options: Array<string>;
  disabled?: boolean;
  id?: string;
  name?: string;
}

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  style?: CSSProperties;
  lineButton?: boolean;
  disabled?: boolean;
}

export interface NavLinkProps {
  label: string;
  Icon: React.FC;
  route: string;
  onClick?:()=>void
}

export interface IconProps {
  active?: boolean;
}
