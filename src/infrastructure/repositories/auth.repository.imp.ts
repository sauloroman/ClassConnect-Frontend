import { RegisterAccountDto, RegisterAccountResponse } from "../../domain/dto";
import { AuthRepository } from "../../domain/repositories";
import { classconnectApiPublic } from "../api/classconnect.api";

export class ClassConnectAPIAuthRepository implements AuthRepository {

  async registerAccount(registerAccountDto: RegisterAccountDto): Promise<RegisterAccountResponse> {
    const { data } = await classconnectApiPublic.post<RegisterAccountResponse>(
      '/auth/users', 
      registerAccountDto 
    )
    return data
  }

}