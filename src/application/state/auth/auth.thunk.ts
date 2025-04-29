import { Dispatch } from "@reduxjs/toolkit"
import { 
  LoginAccountDto, 
  RegisterAccountDto, 
  ValidateAccountDto, 
  ForgotPassswordDto, 
} from "../../../domain/dto"
import { ClassConnectAPIAuthRepository } from "../../../infrastructure/repositories/auth.repository.imp"
import { AuthService } from "../../service/auth.service"
import { login, setIsLoadingAuth, setVerificationCodeEmailSent } from "./auth.slice"
import { showAlertError, showAlertInfo, showAlertSuccess } from "../alert/alert.slice"

const authRepository = new ClassConnectAPIAuthRepository()
const authService = new AuthService({ authRepo: authRepository })

export const startRegisteringAccount = ( registerAccountDto: Partial<RegisterAccountDto> ) => {
  return async ( dispatch: Dispatch ) => {

    dispatch( setIsLoadingAuth( true ) )

    try {
      
      const data = await authService.registerAccount( registerAccountDto )
      dispatch( showAlertSuccess( data.msg ) )
      dispatch( setVerificationCodeEmailSent( registerAccountDto.email! ) )
      
      localStorage.setItem('classconnectTempEmail', JSON.stringify(registerAccountDto.email! ) )

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
      localStorage.removeItem('classconnectTempEmail')

      dispatch( showAlertSuccess( data.msg ) )
      dispatch( login( data ) )

    } catch (error) {
      dispatch( showAlertError( error as string ) )
    }

    dispatch( setIsLoadingAuth(false) )
  }
}

export const startResendingVerificationCode = ( email: string ) => {
  return async ( dispatch: Dispatch ) => {

    dispatch( setIsLoadingAuth( true ) )

    try {

      const { msg } = await authService.resendVerificationCode( email )
      dispatch( showAlertInfo( msg ) )

    } catch (error) {
      dispatch( showAlertError( error as string ) )
    }


    dispatch( setIsLoadingAuth( false ) )

  }
}

export const startRenewingToken = () => {
  return async ( dispatch: Dispatch ) => {

    dispatch( setIsLoadingAuth(true) )

    try {

      const data = await authService.renewToken()

      dispatch( login({ msg: '', ...data }) )
      localStorage.setItem('classconnectToken', data.token )

    } catch (error) {
      console.log(error)
    }

    dispatch( setIsLoadingAuth(false) )

  }
}

export const startSendingEmailToRecoverPassword = ( forgotPassswordDto: ForgotPassswordDto ) => {
  return async( dispatch: Dispatch ) => {

    dispatch( setIsLoadingAuth(true) )

    try {

      const data = await authService.sendEmailForRecoverPassword( forgotPassswordDto )
      dispatch(showAlertInfo( data.msg ))

    } catch (error) {
      dispatch( showAlertError( error as string ) )
    }

    dispatch( setIsLoadingAuth( false ) )

  }
}