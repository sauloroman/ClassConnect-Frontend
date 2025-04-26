import { RegisterAccountDto, RegisterAccountResponse } from '../dto/auth.dto'

export abstract class AuthRepository {
  abstract registerAccount( registerAccountDto: RegisterAccountDto ): Promise<RegisterAccountResponse>
} 