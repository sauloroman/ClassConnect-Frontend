import { RegisterAccountDto, RegisterAccountResponse } from '../dto/auth.dto'

export abstract class AuthRepository {
  abstract registerAccount( registerAccountDto: Partial<RegisterAccountDto> ): Promise<RegisterAccountResponse>
} 