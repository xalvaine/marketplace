import { createSlice, Dispatch } from '@reduxjs/toolkit'

interface InitialState {
  isLoading: boolean
  isLoggedIn: boolean
}

export const authSlice = createSlice({
  name: `auth`,
  initialState: {
    isLoading: false,
    isLoggedIn: false,
  } as InitialState,
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    },
  },
})

const { setIsLoggedIn, setIsLoading } = authSlice.actions

export const postAuth = () => async (dispatch: Dispatch) => {
  dispatch(setIsLoading(true))
  await setTimeout(() => null, 300)
  dispatch(setIsLoggedIn(true))
  dispatch(setIsLoading(false))
}

export const logout = () => (dispatch: Dispatch) => {
  dispatch(setIsLoggedIn(false))
}

export default authSlice.reducer
