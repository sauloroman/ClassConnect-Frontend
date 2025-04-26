import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum AlertType {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info'
}

interface InitialStateAlert {
  message: string,
  showAlert: boolean,
  type: AlertType
}

const initialStateAlert: InitialStateAlert = {
  message: '',
  showAlert: false,
  type: AlertType.INFO
}

export const alertSlice = createSlice({
  name: 'alert',
  initialState: initialStateAlert,
  reducers: {

    showAlertInfo: ( state, { payload }: PayloadAction<string>) => {
      state.showAlert = true
      state.message = payload
      state.type = AlertType.INFO
    },

    showAlertError: (state, { payload }: PayloadAction<string>) => {
      state.showAlert = true
      state.message = payload
      state.type = AlertType.ERROR
    },

    showAlertSuccess: (state, { payload }: PayloadAction<string>) => {
      state.showAlert = true
      state.message = payload
      state.type = AlertType.SUCCESS
    },

    resetAlert: ( state ) => {
      state.message = ''
      state.showAlert = false
      state.type = AlertType.INFO
    },

    hideAlert: ( state ) => {
      state.showAlert = false
    }

  }
})

export const {
  showAlertError,
  showAlertSuccess,
  showAlertInfo,
  resetAlert,
  hideAlert,
} = alertSlice.actions