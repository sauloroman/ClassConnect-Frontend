import { Dispatch } from "@reduxjs/toolkit"
import { LoginAccountDto, RegisterAccountDto, ValidateAccountDto } from "../../../domain/dto"
import { ClassConnectAPIAuthRepository } from "../../../infrastructure/repositories/auth.repository.imp"
import { AuthService } from "../../service/auth.service"
import { login, newValidationCode, resetValidationCode, setIsLoadingAuth, setTempUser } from "./auth.slice"
import { showAlertError, showAlertInfo, showAlertSuccess } from "../alert/alert.slice"

const authRepository = new ClassConnectAPIAuthRepository()
const authService = new AuthService({ authRepo: authRepository })

export const startRegisteringAccount = ( registerAccountDto: Partial<RegisterAccountDto> ) => {
  return async ( dispatch: Dispatch ) => {

    dispatch( setIsLoadingAuth( true ) )

    try {
      
      const data = await authService.registerAccount( registerAccountDto )
      dispatch( showAlertSuccess( data.msg ) )
      dispatch( setTempUser(registerAccountDto) )
      localStorage.setItem('classconnectTempUser', JSON.stringify( registerAccountDto ) )

    } catch (error) {
      dispatch( showAlertError( error as string ) )  
    }

    dispatch( setIsLoadingAuth( false ) )

  }
}

export const startLoginingAccount = ( loginAccountDto: LoginAccountDto ) => {
  return async ( dispatch: Dispatch ) => {
    dispatch( setIsLoadingAuth(true) )

    try {

      const data = await authService.loginAccount( loginAccountDto )

      localStorage.setItem('classconnectToken', data.token )
      dispatch( showAlertSuccess( data.msg ) )
      dispatch( login( data ) )

    } catch (error) {
      dispatch( showAlertError( error as string ) )
    }

    dispatch( setIsLoadingAuth(false) )
    
  }
}

export const startValidatingAccount = ( validateAccountDto: ValidateAccountDto ) => {
  return async( dispatch: Dispatch ) => {

    dispatch( setIsLoadingAuth( true ) )

    try {

      const data = await authService.validateAccount( validateAccountDto )

      localStorage.setItem('classconnectToken', data.token )
      dispatch( showAlertInfo( data.msg ) )
      dispatch( login( data ) )
      dispatch( setTempUser(null) )

    } catch (error) {
      if ( error === 'El código ha expirado. Genera uno nuevo' ) {
        dispatch( newValidationCode() )
      }

      dispatch( showAlertError( error as string ) )
    }

    dispatch( setIsLoadingAuth(false) )
  }
}

export const startResendingVerificationCode = ( email: string ) => {
  return async ( dispatch: Dispatch ) => {

    dispatch( setIsLoadingAuth( true ))

    try {

      const { msg } = await authService.resendVerificationCode( email )
      dispatch( showAlertInfo( msg ) )
      dispatch( resetValidationCode() )

    } catch (error) {
      dispatch( showAlertError( error as string ) )
    }

    dispatch( setIsLoadingAuth( false ))
  }
}