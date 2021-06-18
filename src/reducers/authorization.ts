import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserData } from '@/interfaces'

interface InitialState {
  username?: string
  userdata: UserData
  authorized?: boolean
}

const checkoutSlice = createSlice({
  name: `checkout`,
  initialState: { userdata: {} } as InitialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    },
    setUserdata: (state, action: PayloadAction<UserData>) => {
      state.userdata = action.payload
    },
    setAuthorized: (state, action: PayloadAction<boolean>) => {
      state.authorized = action.payload
    },
  },
})

export const { setUsername, setUserdata, setAuthorized } = checkoutSlice.actions
export const reducer = checkoutSlice.reducer
