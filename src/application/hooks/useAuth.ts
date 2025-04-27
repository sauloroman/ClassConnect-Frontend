import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../state/store"
import { LoginAccountDto, RegisterAccountDto, ValidateAccountDto } from "../../domain/dto"
import { startLoginingAccount, startRegisteringAccount, startValidatingAccount } from "../state/auth/auth.thunk"
import { setTempUser } from "../state/auth/auth.slice"

export const useAuth = () => {

  const dispatch = useDispatch<any>()
  const { isLoading, msg, status, user, validateAccount: { temporalUser, newValidationCode } } = useSelector( (state: RootState) => state.auth )

  const registerAccount = ( registerAccountDto: Partial<RegisterAccountDto> ) => {
    dispatch( startRegisteringAccount( registerAccountDto ) )
  }

  const loginAccount = ( loginAccountDto: LoginAccountDto ) => {
    dispatch( startLoginingAccount( loginAccountDto ) )
  }

  const stablishTempUser = ( user: Partial<RegisterAccountDto> ) => dispatch( setTempUser(user) )

  const validateAccount = ( validateAccountDto: ValidateAccountDto ) => {
    dispatch( startValidatingAccount(validateAccountDto) )
  }

  return {
    isLoading,
    msg,
    status,
    user,
    temporalUser,
    newValidationCode,

    loginAccount,
    registerAccount,
    stablishTempUser,
    validateAccount,
  }

}