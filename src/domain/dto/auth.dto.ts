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
  token: string;
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

export interface RenewTokenReponse {
  ok: boolean;
  user: UserEntity;
  token: string;
}

export interface ResendValidationCode {
  ok: boolean;
  msg: string;
}

export interface ForgotPassswordDto {
  email: string;
}

export interface ForgotPasswordDtoResponse {
  ok: boolean;
  msg: string;
}