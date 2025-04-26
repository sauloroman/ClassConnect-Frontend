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

  async registerAccount( registerAccountDto: RegisterAccountDto ): Promise<RegisterAccountResponse | unknown> {
    try {
      const data = await this.authRepo.registerAccount( registerAccountDto )
      return data 
    } catch (error) {
      console.log(error)
      return error
    }
  }

}
