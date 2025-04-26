import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../state/store"
import { RegisterAccountDto } from "../../domain/dto"
import { startRegisteringAccount } from "../state/auth/auth.thunk"

export const useAuth = () => {

  const dispatch = useDispatch<any>()
  const { isLoading, msg, status, user } = useSelector( (state: RootState) => state.auth )

  const registerAccount = ( registerAccountDto: Partial<RegisterAccountDto> ) => {
    dispatch( startRegisteringAccount( registerAccountDto ) )
  }

  return {
    isLoading,
    msg,
    status,
    user,

    registerAccount
  }

}