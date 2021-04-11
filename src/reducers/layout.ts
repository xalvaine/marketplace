import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface InitialState {
  showSearch?: boolean
  showCategories?: boolean
  showCatalog?: boolean
}

const layoutSlice = createSlice({
  name: `layout`,
  initialState: {} as InitialState,
  reducers: {
    setLayoutParams: (state, action: PayloadAction<InitialState>) => {
      state.showSearch = action.payload?.showSearch
      state.showCategories = action.payload?.showCategories
    },
    setShowCatalog: (state, action) => {
      state.showCatalog = action.payload
    },
  },
})

export const { setLayoutParams, setShowCatalog } = layoutSlice.actions
export const reducer = layoutSlice.reducer
