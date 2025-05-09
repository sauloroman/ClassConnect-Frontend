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

  async renewToken(): Promise<RenewTokenReponse> {
    try {
      const data = await this.authRepo.renewToken()
      return data
    } catch (error: any) {
      const errorMessage = error.response?.data.error ?? 'No se pudo continuar con la sesión activa'
      throw errorMessage
    }
  }

  async resendVerificationCode( email: string ): Promise<ResendValidationCode> {
    try {
      const data = await this.authRepo.resenValidationCode( email )
      return data
    } catch (error: any) {
      const errorMessage = error.response?.data.error ?? 'No fue posible mandar el correo de verificacion'
      throw errorMessage
    }
  }

  async sendEmailForRecoverPassword( forgotPassswordDto: ForgotPassswordDto ): Promise<ForgotPasswordDtoResponse> {
    try {
      const data = await this.authRepo.forgotPassword( forgotPassswordDto )
      return data
    } catch (error: any) {
      console.log(error)
      const errorMessage = error.response?.data.error ?? 'No se pudo mandar el correo para recuperar contraseña'
      throw errorMessage
    }
  }

  async changePassword( changePasswordDto: ChangePasswordDto ): Promise<ChangePasswordDtoResponse> {
    try {
      const data = await this.authRepo.changePassword( changePasswordDto )
      return data
    } catch (error: any) {
      console.log(error)
      const errorMessage = error.response?.data.error ?? 'No es posible cambiar la contraseña por ahora'
      throw errorMessage
    }
  }

}
