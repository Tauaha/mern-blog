import { createSlice } from "@reduxjs/toolkit";
import { getMe, loginUser, registerUser } from "./authOperations";
const initialState = {
    user: null,
    token: null,
    isLoading: false,
    status: null,
}



const handelPending  = (state) => {
  state.isLoading = true
  state.status = null
}
const registerFulf = (state, action) => {
  state.isLoading = false
  state.status = action.payload.message
  state.user = action.payload.user
  state.token = action.payload.token
} 

const registerRej =(state, action) => {
  state.isLoading = false
  state.status = action.payload.message
  
} 

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
        state.user = null
        state.token= null
        state.isLoading= false
        state.status= null}
    },
  extraReducers:  builder => {
    builder
      .addCase(registerUser.pending, handelPending)
      .addCase(registerUser.fulfilled, registerFulf)
      .addCase(registerUser.rejected, registerRej)
      .addCase(loginUser.pending, handelPending)
      .addCase(loginUser.fulfilled, registerFulf)
      .addCase(loginUser.rejected, registerRej)
      .addCase(getMe.pending, handelPending)
      .addCase(getMe.fulfilled, (state, action) => {
  state.isLoading = false
  state.status = null
  state.user = action.payload?.user
  state.token = action.payload?.token
} )
      .addCase(getMe.rejected, registerRej)
    }

})

export const checkIsAuth = (state)=> Boolean(state.auth.token)

export const { logout } = authSlice.actions
export default authSlice.reducer