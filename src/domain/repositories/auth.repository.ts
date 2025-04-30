import { 
  LoginAccountDto, 
  LoginAccountResponse,  
  RegisterAccountDto, 
  RegisterAccountResponse, 
  RenewTokenReponse, 
  ResendValidationCode, 
  ValidateAccountDto,
  ForgotPassswordDto,
  ForgotPasswordDtoResponse,
  ChangePasswordDto,
  ChangePasswordDtoResponse
} from '../dto/auth.dto'

export abstract class AuthRepository {
  abstract registerAccount( registerAccountDto: Partial<RegisterAccountDto> ): Promise<RegisterAccountResponse>
  abstract loginAccount( loginAccountDto: LoginAccountDto ): Promise<LoginAccountResponse>
  abstract validateAccount( validateAccountDto: ValidateAccountDto ): Promise<LoginAccountResponse>
  abstract resenValidationCode( email: string ): Promise<ResendValidationCode>
  abstract renewToken(): Promise<RenewTokenReponse>
  abstract forgotPassword( forgotPassswordDto: ForgotPassswordDto ): Promise<ForgotPasswordDtoResponse>
  abstract changePassword( changePasswordDto: ChangePasswordDto ): Promise<ChangePasswordDtoResponse>
} 
