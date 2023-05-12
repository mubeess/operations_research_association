import { IconProps } from "../../components/types";

export const FolderIcon = ({ active }: IconProps) => (
  <svg
    width="18"
    height="15"
    viewBox="0 0 18 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.125 3H12.75V1.125L12.125 0.5H5.875L5.25 1.125V3H0.875L0.25 3.625V13.625L0.875 14.25H17.125L17.75 13.625V3.625L17.125 3ZM6.5 1.75H11.5V3H6.5V1.75ZM16.5 4.25V5.2L11.5 8V7.375L10.8875 6.75H7.1375L6.5 7.375V8L1.5 5.1375V4.25H16.5ZM10.25 8V9.25H7.75V8H10.25ZM1.5 13V6.575L6.5 9.4375V9.875L7.125 10.5H10.875L11.5 9.875V9.4875L16.5 6.6375V13H1.5Z"
      fill={active ? "white" : "black"}
    />
  </svg>
);

export const PaymentIcon = ({ active }: IconProps) => (
  <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
  width="14.000000pt" height="18.000000pt" viewBox="0 0 14.000000 18.000000"
  preserveAspectRatio="xMidYMid meet">
 
 <g transform="translate(0.000000,18.000000) scale(0.100000,-0.100000)"
 fill="#000000" stroke="none">
 <path d="M10 95 c0 -47 3 -85 7 -85 4 0 17 10 30 22 l23 22 30 -29 30 -29 0
 92 0 92 -60 0 -60 0 0 -85z m110 -2 l0 -68 -25 30 -25 30 -25 -30 -25 -30 0
 68 0 67 50 0 50 0 0 -67z"
 fill={active ? "white" : "black"}
 />
 </g>
 </svg>
);

export const SeminarIcon = ({active}: IconProps) => (
  <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
  width="18.000000pt" height="18.000000pt" viewBox="0 0 18.000000 18.000000"
  preserveAspectRatio="xMidYMid meet">

  <g transform="translate(0.000000,18.000000) scale(0.100000,-0.100000)"
  fill="#000000" stroke="none">
  <path d="M156 171 c-3 -5 -14 -7 -24 -5 -9 3 -26 -2 -37 -10 -20 -14 -20 -15
  10 -45 34 -37 49 -29 58 32 6 37 3 45 -7 28z m-13 -55 c-8 -15 -11 -15 -28 4
  -16 18 -17 23 -5 30 21 13 45 -13 33 -34z"/>
  <path d="M40 97 c-16 -8 -25 -21 -26 -38 0 -13 -4 -31 -9 -38 -6 -11 -4 -13 9
  -8 10 4 26 7 36 7 10 0 29 14 41 32 20 27 20 31 5 25 -25 -10 -40 1 -25 19 14
  17 2 18 -31 1z m20 -32 c10 -12 10 -19 2 -27 -15 -15 -43 8 -35 28 7 18 17 18
  33 -1z"
  fill={active ? "white" : "black"}/>
  </g>
</svg>
)

export const DeleteIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0,0,256,256"
    width="20px"
    height="20px"
    fill-rule="nonzero"
  >
    <g
      fill="#df3333"
      fill-rule="nonzero"
      stroke="none"
      stroke-width="1"
      stroke-linecap="butt"
      stroke-linejoin="miter"
      stroke-miterlimit="10"
      stroke-dasharray=""
      stroke-dashoffset="0"
      font-family="none"
      font-weight="none"
      font-size="none"
      text-anchor="none"
    >
      <g transform="scale(3.2,3.2)">
        <path d="M37,6c-1.64497,0 -3,1.35503 -3,3v1h-9.52734c-1.89168,0 -3.62621,1.07202 -4.47266,2.76367l-1.11719,2.23633h-3.38281c-1.92119,0 -3.5,1.57881 -3.5,3.5c0,1.92119 1.57881,3.5 3.5,3.5h0.58008l3.61719,43.41602c0.21549,2.58219 2.3924,4.58398 4.98438,4.58398h30.63867c2.59122,0 4.76693,-2.0018 4.98242,-4.58398l3.61719,-43.41602h0.58008c1.92119,0 3.5,-1.57881 3.5,-3.5c0,-1.92119 -1.57881,-3.5 -3.5,-3.5h-3.38281l-1.11719,-2.23633c-0.84645,-1.69165 -2.58098,-2.76367 -4.47266,-2.76367h-9.52734v-1c0,-1.64497 -1.35503,-3 -3,-3zM37,8h6c0.56503,0 1,0.43497 1,1v1h-8v-1c0,-0.56503 0.43497,-1 1,-1zM24.47266,12h10.35938c0.10799,0.01785 0.21818,0.01785 0.32617,0h9.67383c0.10799,0.01785 0.21818,0.01785 0.32617,0h10.36914c1.13832,0 2.17404,0.63986 2.68359,1.6582l1.67187,3.3418h4.61719c0.84081,0 1.5,0.65919 1.5,1.5c0,0.84081 -0.65919,1.5 -1.5,1.5h-0.41406h-48.17188h-0.41406c-0.84081,0 -1.5,-0.65919 -1.5,-1.5c0,-0.84081 0.65919,-1.5 1.5,-1.5h4.61719l1.67187,-3.3418c0.50955,-1.01835 1.54527,-1.6582 2.68359,-1.6582zM24,15c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM28,15c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM32,15c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM36,15c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM40,15c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM44,15c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM48,15c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM52,15c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM56,15c-0.55228,0 -1,0.44772 -1,1c0,0.55228 0.44772,1 1,1c0.55228,0 1,-0.44772 1,-1c0,-0.55228 -0.44772,-1 -1,-1zM18.08594,22h43.82812l-3.60547,43.24805c-0.13051,1.56381 -1.4195,2.75195 -2.98828,2.75195h-30.63867c-1.57003,0 -2.85973,-1.18814 -2.99023,-2.75195zM54.76953,26.02734l-0.6875,0.57617l-0.08008,0.3418l-0.00586,0.09961l0.35742,0.82227l0.87305,0.20508l0.68555,-0.57617l0.08008,-0.3418l0.00586,-0.09961l-0.35742,-0.82227zM39.7168,26.04102l-0.6543,0.61133l-0.0625,0.34766v0.09961l0.40234,0.80078l0.88086,0.1582l0.6543,-0.61133l0.0625,-0.34766v-0.09961l-0.40234,-0.80078zM24.66602,26.05859l-0.62109,0.64648l-0.04297,0.34961l0.00586,0.09961l0.44336,0.77734l0.88867,0.11133l0.62109,-0.64648l0.04297,-0.35156l-0.00586,-0.09961l-0.44336,-0.77734zM54.54688,30.12109l-0.68555,0.57617l-0.08203,0.34375l-0.00391,0.09961l0.35742,0.82031l0.87109,0.20508l0.6875,-0.57422l0.08008,-0.34375l0.00586,-0.09961l-0.35742,-0.82227zM39.7168,30.14063l-0.6543,0.61328l-0.0625,0.3457v0.09961l0.40234,0.80273l0.88086,0.15625l0.6543,-0.61133l0.0625,-0.34766v-0.09961l-0.40234,-0.80078zM24.88672,30.15234l-0.62109,0.64648l-0.04297,0.34961l0.00586,0.09961l0.44336,0.77734l0.88867,0.11133l0.62109,-0.64648l0.04297,-0.34961l-0.00391,-0.09961l-0.44531,-0.7793zM54.32617,34.21484l-0.6875,0.57617l-0.08008,0.34375l-0.00586,0.09961l0.35742,0.82031l0.87305,0.20703l0.6875,-0.57617l0.08008,-0.34375l0.00586,-0.09961l-0.35742,-0.82227zM39.7168,34.24023l-0.6543,0.61328l-0.0625,0.3457v0.10156l0.40234,0.80078l0.88086,0.1582l0.6543,-0.61328l0.0625,-0.3457v-0.10156l-0.40234,-0.80078zM25.10742,34.24609l-0.61914,0.64648l-0.04492,0.34961l0.00586,0.09961l0.44336,0.77734l0.89063,0.11133l0.61914,-0.64648l0.04492,-0.34961l-0.00586,-0.09961l-0.44531,-0.7793zM54.10547,38.30859l-0.6875,0.57617l-0.08008,0.34375l-0.00586,0.09961l0.35742,0.82227l0.87305,0.20508l0.68555,-0.57617l0.08203,-0.34375l0.00391,-0.09961l-0.35742,-0.82227zM25.32813,38.33984l-0.61914,0.64648l-0.04297,0.34961l0.00391,0.09961l0.44531,0.7793l0.88867,0.10938l0.62109,-0.64648l0.04297,-0.34961l-0.00586,-0.09961l-0.44336,-0.7793zM39.7168,38.3418l-0.6543,0.61133l-0.0625,0.34766v0.09961l0.40234,0.80078l0.88086,0.1582l0.6543,-0.61328l0.0625,-0.3457v-0.09961l-0.40234,-0.80273zM53.88281,42.40234l-0.68555,0.57617l-0.08008,0.34375l-0.00586,0.09961l0.35742,0.82227l0.87109,0.20508l0.6875,-0.57617l0.08008,-0.34375l0.00586,-0.09961l-0.35742,-0.82031zM25.55078,42.43359l-0.62109,0.64648l-0.04297,0.34961l0.00586,0.09961l0.44336,0.7793l0.88867,0.10938l0.62109,-0.64648l0.04297,-0.34961l-0.00586,-0.09961l-0.44336,-0.7793zM39.7168,42.44141l-0.6543,0.61133l-0.0625,0.34766v0.09961l0.40234,0.80078l0.88086,0.1582l0.6543,-0.61133l0.0625,-0.34766v-0.09961l-0.40234,-0.80078zM53.66211,46.49805l-0.68555,0.57422l-0.08203,0.34375l-0.00586,0.09961l0.35938,0.82227l0.87109,0.20508l0.6875,-0.57617l0.08008,-0.34375l0.00586,-0.09961l-0.35742,-0.82031zM25.77148,46.52734l-0.62109,0.64648l-0.04297,0.34961l0.00586,0.09961l0.44336,0.7793l0.89063,0.10938l0.61914,-0.64648l0.04492,-0.34961l-0.00586,-0.09961l-0.44531,-0.77734zM39.7168,46.54102l-0.6543,0.61133l-0.0625,0.34766v0.09961l0.40234,0.80078l0.88086,0.1582l0.6543,-0.61133l0.0625,-0.34766v-0.09961l-0.40234,-0.80078zM53.44141,50.5918l-0.6875,0.57617l-0.08008,0.3418l-0.00586,0.09961l0.35742,0.82227l0.87305,0.20508l0.68555,-0.57617l0.08203,-0.3418l0.00391,-0.10156l-0.35742,-0.82031zM25.99219,50.62109l-0.61914,0.64648l-0.04297,0.34961l0.00391,0.10156l0.44531,0.77734l0.88867,0.10938l0.62109,-0.64648l0.04297,-0.34961l-0.00586,-0.09961l-0.44336,-0.77734zM39.7168,50.64063l-0.6543,0.61328l-0.0625,0.3457v0.09961l0.40234,0.80273l0.88086,0.15625l0.6543,-0.61133l0.0625,-0.34766v-0.09961l-0.40234,-0.80078zM53.21875,54.68555l-0.68555,0.57617l-0.08008,0.3418l-0.00586,0.09961l0.35742,0.82227l0.87305,0.20508l0.68555,-0.57617l0.08008,-0.3418l0.00586,-0.09961l-0.35742,-0.82227zM26.21484,54.7168l-0.62109,0.64648l-0.04297,0.34961l0.00586,0.09961l0.44336,0.77734l0.88867,0.11133l0.62109,-0.64648l0.04297,-0.35156l-0.00586,-0.09961l-0.44336,-0.77734zM39.7168,54.74023l-0.6543,0.61328l-0.0625,0.3457v0.10156l0.40234,0.80078l0.88086,0.1582l0.6543,-0.61328l0.0625,-0.3457v-0.10156l-0.40234,-0.80078zM52.99805,58.7793l-0.68555,0.57617l-0.08203,0.3418l-0.00391,0.10156l0.35742,0.82031l0.87109,0.20508l0.6875,-0.57422l0.08008,-0.34375l0.00586,-0.09961l-0.35742,-0.82227zM26.43555,58.81055l-0.62109,0.64648l-0.04297,0.34961l0.00586,0.09961l0.44336,0.77734l0.89063,0.11133l0.61914,-0.64648l0.04297,-0.34961l-0.00391,-0.10156l-0.44531,-0.77734zM39.7168,58.8418l-0.6543,0.61133l-0.0625,0.34766v0.09961l0.40234,0.80078l0.88086,0.1582l0.6543,-0.61328l0.0625,-0.3457v-0.09961l-0.40234,-0.80273zM52.77734,62.87305l-0.6875,0.57617l-0.08008,0.34375l-0.00586,0.09961l0.35742,0.82031l0.87305,0.20703l0.68555,-0.57617l0.08203,-0.34375l0.00586,-0.09961l-0.35937,-0.82227zM26.65625,62.9043l-0.61914,0.64648l-0.04492,0.34961l0.00586,0.09961l0.44531,0.77734l0.88867,0.11133l0.62109,-0.64648l0.04297,-0.34961l-0.00586,-0.09961l-0.44336,-0.7793zM39.7168,62.94141l-0.6543,0.61133l-0.0625,0.34766v0.09961l0.40234,0.80078l0.88086,0.1582l0.6543,-0.61133l0.0625,-0.34766v-0.09961l-0.40234,-0.80078z"></path>
      </g>
    </g>
  </svg>
);

export const LocatinIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M16.2483 4.03139C15.1277 2.91085 13.6142 2.27173 12.0297 2.25H11.9697C10.3851 2.27173 8.87159 2.91085 7.75104 4.03139C6.6305 5.15193 5.99138 6.66546 5.96965 8.25C5.94952 9.37542 6.26605 10.4812 6.87865 11.4255L11.5998 21H12.3995L17.1207 11.4255C17.7333 10.4812 18.0498 9.37542 18.0297 8.25C18.0079 6.66546 17.3688 5.15193 16.2483 4.03139ZM11.8857 3.75L12.0087 3.765L12.1197 3.75C13.298 3.80132 14.4119 4.3021 15.2324 5.14939C16.0529 5.99669 16.5177 7.12611 16.5312 8.3055C16.5425 9.14253 16.2981 9.96309 15.8307 10.6575L15.8007 10.7085L15.7752 10.761L11.9997 18.4185L8.22415 10.7685L8.19865 10.71L8.16865 10.659C7.70116 9.96459 7.45677 9.14403 7.46815 8.307C7.48095 7.12625 7.94624 5.99539 8.76813 5.14755C9.59002 4.2997 10.7059 3.79948 11.8857 3.75ZM12.8028 7.0028C12.5562 6.83797 12.2662 6.75 11.9695 6.75C11.5717 6.75 11.1901 6.90804 10.9088 7.18934C10.6275 7.47064 10.4695 7.85218 10.4695 8.25C10.4695 8.54667 10.5575 8.83668 10.7223 9.08336C10.8871 9.33003 11.1214 9.52229 11.3955 9.63582C11.6695 9.74935 11.9711 9.77906 12.2621 9.72118C12.5531 9.6633 12.8204 9.52044 13.0301 9.31066C13.2399 9.10088 13.3828 8.83361 13.4407 8.54264C13.4985 8.25166 13.4688 7.95006 13.3553 7.67598C13.2418 7.40189 13.0495 7.16762 12.8028 7.0028ZM10.3028 5.75559C10.7961 5.42595 11.3761 5.25 11.9695 5.25C12.7651 5.25 13.5282 5.56607 14.0908 6.12868C14.6534 6.69129 14.9695 7.45435 14.9695 8.25C14.9695 8.84334 14.7935 9.42336 14.4639 9.91671C14.1342 10.4101 13.6657 10.7946 13.1175 11.0216C12.5694 11.2487 11.9662 11.3081 11.3842 11.1924C10.8023 11.0766 10.2677 10.7909 9.84816 10.3713C9.42861 9.95176 9.14288 9.41721 9.02713 8.83527C8.91137 8.25333 8.97078 7.65013 9.19784 7.10195C9.42491 6.55377 9.80943 6.08524 10.3028 5.75559Z"
      fill="#C5C5C5"
    />
  </svg>
);

export const EventsIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M19.5 0V1.5L21 3V22.5L19.5 24H4.5L3 22.5V3L4.5 1.5V0H6V1.5H9V0H10.5V1.5H13.5V0H15V1.5H18V0H19.5ZM4.5 22.5H19.5V3H4.5V22.5ZM7.5 6H16.5V7.5H7.5V6ZM16.5 12H7.5V13.5H16.5V12ZM7.5 18H16.5V19.5H7.5V18Z"
      fill="#C5C5C5"
    />
  </svg>
);


