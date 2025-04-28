import {
  LoginAccountDto,
  LoginAccountResponse,
  RegisterAccountDto,
  RegisterAccountResponse,
  RenewTokenReponse,
  ResendValidationCode,
  ValidateAccountDto,
} from '../../domain/dto';
import { AuthRepository } from '../../domain/repositories';
import {
  classconnectApiPrivate,
  classconnectApiPublic,
} from '../api/classconnect.api';

export class ClassConnectAPIAuthRepository implements AuthRepository {
  async registerAccount(
    registerAccountDto: Partial<RegisterAccountDto>
  ): Promise<RegisterAccountResponse> {
    const { data } = await classconnectApiPublic.post<RegisterAccountResponse>(
      '/users',
      registerAccountDto
    );
    return data;
  }

  async loginAccount(
    loginAccountDto: LoginAccountDto
  ): Promise<LoginAccountResponse> {
    const { data } = await classconnectApiPublic.post<LoginAccountResponse>(
      '/auth/login',
      loginAccountDto
    );
    return data;
  }

  async validateAccount(
    validateAccountDto: ValidateAccountDto
  ): Promise<LoginAccountResponse> {
    const { data } = await classconnectApiPublic.post<LoginAccountResponse>(
      '/auth/validate-account',
      validateAccountDto
    );
    return data;
  }

  async resenValidationCode(email: string): Promise<ResendValidationCode> {
    const { data } = await classconnectApiPublic.post('/auth/resend-verification-code', {email}) 
    return data
  }

  async renewToken(): Promise<RenewTokenReponse> {
    const { data } = await classconnectApiPrivate.get<RenewTokenReponse>('/auth/renew-token');
    return data;
  }
}
