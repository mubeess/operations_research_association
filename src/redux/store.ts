import { configureStore } from '@reduxjs/toolkit'
import userSlice from './user/userSlice'
import loginSlice from './user/loginSlice'
import loadingSlice from './user/loadingSlice'

export const store = configureStore({
  reducer: {
    user:userSlice,
    login:loginSlice,
    loading:loadingSlice
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch