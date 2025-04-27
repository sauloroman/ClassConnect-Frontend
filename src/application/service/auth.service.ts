import { 
  LoginAccountDto, 
  LoginAccountResponse, 
  RegisterAccountDto, 
  RegisterAccountResponse, 
  ValidateAccountDto
} from "../../domain/dto";
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

  async loginAccount( loginAccoutDto: LoginAccountDto ): Promise<LoginAccountResponse> {
    try {
      const data = await this.authRepo.loginAccount( loginAccoutDto )
      return data
    } catch (error: any) {
      const errorMessage = error.response?.data.error ?? 'Error al iniciar sesión'
      throw errorMessage
    }
  }

  async validateAccount( validateAccountDto: ValidateAccountDto ): Promise<LoginAccountResponse> {
    try {
      const data = await this.authRepo.validateAccount( validateAccountDto )
      return data
    } catch (error: any) {
      const errorMessage = error.response?.data.error ?? 'No se ha podido validar la cuenta'
      throw errorMessage
    }
  }

}
