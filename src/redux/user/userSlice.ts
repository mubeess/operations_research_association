import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  user: {
    firstName: string;
    lastName: string;
    email: string;
    token: string;
    isLoggedIn: boolean;
    isNew:boolean;
    status?:string;
    membership?:string;
    passport?:string;
    paid?:boolean;
    rawPassword?:string;
    cert?:any;
   transactions?:[];
   membershipNumber?:string;
   
  };
}

const initialState: UserState = {
  user: {
    firstName: "",
    lastName: "",
    email: "",
    token: "",
    isLoggedIn: false,
    isNew:true,
    status:'Pending',
    membership:'none',
    passport:'none',
    paid:false,
    rawPassword:'',
    cert:null,
    transactions:[],
    membershipNumber:''
  },
};


export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.user = action.payload.user;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions;

export default userSlice.reducer;
