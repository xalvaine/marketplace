import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { City } from '@/interfaces'

interface InitialState {
  city?: City
}

const checkoutSlice = createSlice({
  name: `checkout`,
  initialState: {} as InitialState,
  reducers: {
    setCity: (state, action: PayloadAction<City>) => {
      state.city = action.payload
    },
  },
})

export const { setCity } = checkoutSlice.actions
export const reducer = checkoutSlice.reducer
