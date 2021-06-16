import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserData } from '@/interfaces'

interface InitialState {
  username?: string
  userdata: UserData
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
  },
})

export const { setUsername, setUserdata } = checkoutSlice.actions
export const reducer = checkoutSlice.reducer
