import { LoginAccountDto } from "../../../../domain/dto"
import { FormValidations } from "../../../hooks"

export const formData: LoginAccountDto = {
  email: '',
  password: '',
}

export const formValidations: FormValidations<LoginAccountDto> = {
  email: [ (value: string) => value.trim().length > 2, 'El correo es obligatorio'],
  password: [ (value: string) => value.trim().length > 2, 'La contraseña es obligatoria']
}
