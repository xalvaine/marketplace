import { createSlice } from '@reduxjs/toolkit'

interface InitialState {
  showSearch: boolean
}

const layoutSlice = createSlice({
  name: `layout`,
  initialState: {} as InitialState,
  reducers: {
    setShowSearch: (state, action) => {
      state.showSearch = action.payload
    },
  },
})

export const { setShowSearch } = layoutSlice.actions
export const reducer = layoutSlice.reducer
