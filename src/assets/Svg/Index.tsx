import { IconProps } from "../../components/types";

export const FolderIcon=({active}:IconProps)=>(
<svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path 
d="M17.125 3H12.75V1.125L12.125 0.5H5.875L5.25 1.125V3H0.875L0.25 3.625V13.625L0.875 14.25H17.125L17.75 13.625V3.625L17.125 3ZM6.5 1.75H11.5V3H6.5V1.75ZM16.5 4.25V5.2L11.5 8V7.375L10.8875 6.75H7.1375L6.5 7.375V8L1.5 5.1375V4.25H16.5ZM10.25 8V9.25H7.75V8H10.25ZM1.5 13V6.575L6.5 9.4375V9.875L7.125 10.5H10.875L11.5 9.875V9.4875L16.5 6.6375V13H1.5Z" 
fill={active?'white':'black'}
/>
</svg>
)