import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthStatus, UserEntity } from "../../../domain/entities";
import { LoginAccountResponse, RegisterAccountDto } from "../../../domain/dto";

interface InitialStateAuth {
  user: UserEntity | null 
  status: AuthStatus
  isLoading: boolean
  error: string | null
  msg: string | null
  validateAccount: {
    temporalUser: Partial<RegisterAccountDto> | null,
    newValidationCode: boolean,
  }
}

const initialStateAuth: InitialStateAuth = {
  isLoading: false,
  error: null,
  msg: null,
  status: AuthStatus.UNAUTHENTICATED,
  user: null,
  validateAccount: { 
    temporalUser: null ,
    newValidationCode: false
  }
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialStateAuth,
  reducers: {

    login: ( state, { payload }: PayloadAction<LoginAccountResponse> ) => {
      state.error = null
      state.msg = payload.msg
      state.user = payload.user
      state.status = AuthStatus.AUTHENTICATED
    },

    setIsLoadingAuth: ( state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload
    },

    setTempUser: ( state, { payload }: PayloadAction<Partial<RegisterAccountDto | null>> ) => {
      state.validateAccount.temporalUser = payload
    },

    newValidationCode: ( state ) => {
      state.validateAccount.newValidationCode = true
    },

    resetValidationCode: ( state ) => {
      state.validateAccount.newValidationCode = false
    }

  }
})

export const {
  login,
  setIsLoadingAuth,
  setTempUser,
  newValidationCode,
  resetValidationCode
} = authSlice.actions