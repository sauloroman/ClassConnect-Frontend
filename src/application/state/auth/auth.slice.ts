import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthStatus, UserEntity } from "../../../domain/entities";
import { LoginAccountResponse } from "../../../domain/dto";

interface InitialStateAuth {
  user: UserEntity | null 
  status: AuthStatus
  isLoading: boolean
  error: string | null
  msg: string | null,
  verificationCodeSent: {
    email: string | null,
  }
}

const initialStateAuth: InitialStateAuth = {
  isLoading: false,
  error: null,
  msg: null,
  status: AuthStatus.UNAUTHENTICATED,
  user: null,
  verificationCodeSent: {
    email: null,
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

    setVerificationCodeEmailSent: ( state, { payload }: PayloadAction<string | null>) => {
      state.verificationCodeSent.email = payload
    }

  }
})

export const {
  login,
  setIsLoadingAuth,
  setVerificationCodeEmailSent,
} = authSlice.actions