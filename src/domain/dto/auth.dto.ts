import { Roles, UserEntity } from "../entities";

export interface RegisterAccountDto {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: Roles
}

export interface RegisterAccountResponse {
  ok: boolean;
  msg: string;
  user: UserEntity
}

export interface LoginAccountDto {
  email: string;
  password: string;
}

export interface LoginAccountResponse {
  ok: boolean;
  msg: string;
  user: UserEntity;
  token: string;
}

export interface ValidateAccountDto {
  email: string;
  code: string;
}

export interface NewValidationCodeReponse {
  ok: boolean,
  msg: string,
}