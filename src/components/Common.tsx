import { TextProps } from "./types";

export const Header = ({ text }: TextProps) => (
  <span className="header">{text}</span>
);

export const RegularText = ({ text, style }: TextProps) => (
  <span style={style} className="regular_text">
    {text}
  </span>
);
