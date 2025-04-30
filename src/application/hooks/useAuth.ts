import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../state/store"
import { 
  LoginAccountDto, 
  RegisterAccountDto, 
  ValidateAccountDto, 
  ForgotPassswordDto ,
  ChangePasswordDto
} from "../../domain/dto"
import { 
  startChangingPassword, 
  startLoginingAccount, 
  startRegisteringAccount, 
  startRenewingToken, 
  startResendingVerificationCode, 
  startSendingEmailToRecoverPassword, 
  startValidatingAccount 
} from "../state/auth/auth.thunk"
import { setVerificationCodeEmailSent } from "../state/auth/auth.slice"

export const useAuth = () => {

  const dispatch = useDispatch<any>()
  const { 
    isLoading, 
    msg, 
    status, 
    user, 
    verificationCodeSent,
  } = useSelector( (state: RootState) => state.auth )

  const registerAccount = ( registerAccountDto: Partial<RegisterAccountDto> ) => {
    dispatch( startRegisteringAccount( registerAccountDto ) )
  }

  const loginAccount = ( loginAccountDto: LoginAccountDto ) => {
    dispatch( startLoginingAccount( loginAccountDto ) )
  }

  const validateAccount = ( validateAccountDto: ValidateAccountDto ) => {
    dispatch( startValidatingAccount(validateAccountDto) )
  }

  const resendVerificationCode = ( email: string  ) => {
    dispatch( startResendingVerificationCode(email) )
  }

  const renewToken = () => dispatch( startRenewingToken() )

  const setTempEmail = ( email: string | null ) => dispatch( setVerificationCodeEmailSent( email ) )

  const sendEmailToRecoverPassword = ( forgotPassswordDto: ForgotPassswordDto ) => {
    dispatch( startSendingEmailToRecoverPassword( forgotPassswordDto ) )
  }

  const changePasswordOfAccount = ( changePasswordDto: ChangePasswordDto ) => {
    dispatch( startChangingPassword( changePasswordDto ) )
  }

  return {
    // Properties
    isLoading,
    msg,
    status,
    user,
    verificationCodeSent,

    // Methods
    loginAccount,
    registerAccount,
    validateAccount,
    renewToken,
    resendVerificationCode,
    setTempEmail,
    sendEmailToRecoverPassword,
    changePasswordOfAccount,
  }


}