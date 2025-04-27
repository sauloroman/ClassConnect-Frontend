import { 
  LoginAccountDto, 
  LoginAccountResponse, 
  NewValidationCodeReponse, 
  RegisterAccountDto, 
  RegisterAccountResponse, 
  ValidateAccountDto 
} from "../../domain/dto";
import { AuthRepository } from "../../domain/repositories";
import { classconnectApiPublic } from "../api/classconnect.api";

export class ClassConnectAPIAuthRepository implements AuthRepository {

  async registerAccount(registerAccountDto: Partial<RegisterAccountDto>): Promise<RegisterAccountResponse> {
    const { data } = await classconnectApiPublic.post<RegisterAccountResponse>(
      '/users', 
      registerAccountDto 
    )
    return data
  }

  async loginAccount( loginAccountDto: LoginAccountDto ): Promise<LoginAccountResponse> {
    const { data } = await classconnectApiPublic.post<LoginAccountResponse>(
      '/auth/login',
      loginAccountDto,
    )
    return data
  }

  async validateAccount(validateAccountDto: ValidateAccountDto): Promise<LoginAccountResponse> {
    const { data } = await classconnectApiPublic.post<LoginAccountResponse>(
      'auth/validate-account',
      validateAccountDto
    )
    return data
  }

  async resendValidationCode(email: string): Promise<NewValidationCodeReponse> {
    const { data } = await classconnectApiPublic.post<NewValidationCodeReponse>(
      '/auth/resend-verification-code',
      { email }
    )
    return data
  }

}