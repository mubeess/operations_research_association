import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface LoginState {
  isLoading: boolean;
  error: string;
  success: boolean;
}

const initialState: LoginState = {
  isLoading: false,
  error: "",
  success: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setSuccess: (state) => {
      const prevSuccess = state.success;
      state.success = !prevSuccess;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setError, setLoading, setSuccess } = loginSlice.actions;

export default loginSlice.reducer;
