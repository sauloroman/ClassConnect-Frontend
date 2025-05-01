import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialStateMenuSlice {
  IsAsideMenuOpen: boolean,
  IsAccordeonMenuOpen: boolean,
}

export const initialState: InitialStateMenuSlice = {
  IsAccordeonMenuOpen: false,
  IsAsideMenuOpen: true,
}

export const menuSlice = createSlice({
  initialState: initialState,
  name: 'menu',
  reducers: {

    setAsideMenuStatus: ( state, { payload }: PayloadAction<boolean> ) => {
      state.IsAsideMenuOpen = payload
    },

    setAccordeonMenuStatus: ( state, { payload }: PayloadAction<boolean> ) => {
      state.IsAccordeonMenuOpen = payload
    }

  }
})

export const {
  setAccordeonMenuStatus,
  setAsideMenuStatus,
} = menuSlice.actions