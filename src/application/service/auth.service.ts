import { RegisterAccountDto, RegisterAccountResponse } from "../../domain/dto";
import { AuthRepository } from "../../domain/repositories";

interface AuthServiceOptions {
  authRepo: AuthRepository
}

export class AuthService {

  private readonly authRepo: AuthRepository

  constructor({ authRepo }: AuthServiceOptions){
    this.authRepo = authRepo
  }

  async registerAccount( registerAccountDto: Partial<RegisterAccountDto> ): Promise<RegisterAccountResponse> {
    try {
      const data = await this.authRepo.registerAccount( registerAccountDto )
      return data 
    } catch (error: any) {
      const errorMessage = error.response?.data.error ?? 'Error al registrar la cuenta'
      throw errorMessage
    }
  }

}
