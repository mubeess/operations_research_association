import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


export interface UserDetailState {
  personalDetails?: {
    firstName?: string;
    lastName?: string;
    email?: string;
    dob?: string;
    gender?: string;
    phone?:string;
    state?: string;
    zone?:string;
    password?:string;
    _id?:string;
  };
  supportingDocs?: {}[];
  educationalQualification?: {}[];
  membership?: string;
}

const initialState: UserDetailState = {
  personalDetails: {},
  supportingDocs: [],
  educationalQualification: [],
  membership: "",
};

export const loginSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    setPersonalDetails: (state, action: PayloadAction<UserDetailState>) => {
      state.personalDetails = action.payload.personalDetails;
    },
    setSupportingDocs: (state, action: PayloadAction<UserDetailState>) => {
      state.supportingDocs = action.payload.supportingDocs;
    },
    setEducatioanlQualification: (
      state,
      action: PayloadAction<UserDetailState>
    ) => {
      state.educationalQualification = action.payload.educationalQualification;
    },
    setMembership: (state, action: PayloadAction<UserDetailState>) => {
      state.membership = action.payload.membership;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setPersonalDetails,
  setSupportingDocs,
  setEducatioanlQualification,
  setMembership,
} = loginSlice.actions;

export default loginSlice.reducer;
