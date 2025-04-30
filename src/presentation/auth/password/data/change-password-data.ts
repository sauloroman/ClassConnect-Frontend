import { ChangePasswordDto } from "../../../../domain/dto";
import { FormValidations } from "../../../hooks";
import { isPasswordValid } from "../../../shared/helpers";
import { regularExp } from "../../../shared/utils";

export const formData: ChangePasswordDto = {
  newPassword: '',
  userEmail: ''
}

export const formValidations: FormValidations<ChangePasswordDto> = {
  newPassword: [ 
    (value: string) => isPasswordValid(value), 
    `
      Mínimo 8 caracteres de longitud.
      Debe tener al menos una mayúscula.
      Debe tener al menos 1 número.
    `
  ],
  userEmail: [ (value: string) => 
    value?.trim().length > 2 && regularExp.email.test( value ), 
    'El email no es válido'
  ]
}
