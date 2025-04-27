import { 
  LoginAccountDto, 
  LoginAccountResponse, 
  RegisterAccountDto, 
  RegisterAccountResponse, 
  ValidateAccountDto
} from '../dto/auth.dto'

export abstract class AuthRepository {
  abstract registerAccount( registerAccountDto: Partial<RegisterAccountDto> ): Promise<RegisterAccountResponse>
  abstract loginAccount( loginAccountDto: LoginAccountDto ): Promise<LoginAccountResponse>
  abstract validateAccount( validateAccountDto: ValidateAccountDto ): Promise<LoginAccountResponse>
} 