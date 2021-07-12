import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { City, Order } from '@/interfaces'

interface InitialState {
  city?: City
  order: Partial<Order>
}

const checkoutSlice = createSlice({
  name: `checkout`,
  initialState: {
    order: {},
  } as InitialState,
  reducers: {
    setCity: (state, action: PayloadAction<City>) => {
      state.city = action.payload
    },
    patchOrder: (state, action: PayloadAction<Partial<Order>>) => {
      state.order = { ...state.order, ...action.payload }
    },
  },
})

export const { setCity, patchOrder } = checkoutSlice.actions
export const reducer = checkoutSlice.reducer
