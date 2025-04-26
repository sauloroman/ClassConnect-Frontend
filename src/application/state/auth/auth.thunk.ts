import { Dispatch } from "@reduxjs/toolkit"
import { RegisterAccountDto } from "../../../domain/dto"
import { ClassConnectAPIAuthRepository } from "../../../infrastructure/repositories/auth.repository.imp"
import { AuthService } from "../../service/auth.service"
import { setIsLoadingAuth } from "./auth.slice"
import { showAlertError } from "../alert/alert.slice"

const authRepository = new ClassConnectAPIAuthRepository()
const authService = new AuthService({ authRepo: authRepository })

export const startRegisteringAccount = ( registerAccountDto: Partial<RegisterAccountDto> ) => {
  return async ( dispatch: Dispatch ) => {

    dispatch( setIsLoadingAuth( true ) )

    try {
      
      const data = await authService.registerAccount( registerAccountDto )
      console.log(data)

    } catch (error) {
      dispatch( showAlertError( error as string ) )  
    }

    dispatch( setIsLoadingAuth( false ) )

  }
}