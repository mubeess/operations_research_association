import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserDetailState {
  personalDetails?: {};
  supportingDocs?: {}[];
  educationalQualification?: {}[];
}

const initialState: UserDetailState = {
  personalDetails: {},
  supportingDocs: [],
  educationalQualification: [],
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
  },
});

// Action creators are generated for each case reducer function
export const {
  setPersonalDetails,
  setSupportingDocs,
  setEducatioanlQualification,
} = loginSlice.actions;

export default loginSlice.reducer;
