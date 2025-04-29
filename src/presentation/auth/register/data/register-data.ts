import { RegisterAccountDto } from "../../../../domain/dto";
import { Roles } from "../../../../domain/entities";
import { FormValidations } from "../../../hooks";
import { isPasswordValid } from "../../../shared/helpers";
import { regularExp } from "../../../shared/utils";

export const formData: RegisterAccountDto = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  role: Roles.TEACHER,
  confirmPassword: '',
}

export const formValidations: FormValidations<RegisterAccountDto> = {
  firstName: [
    (value: string) => value.trim().length >= 2,
    'El nombre es obligatorio',
  ],
  lastName: [
    (value: string) => value.trim().length >= 2,
    'El apellido es obligatio',
  ],
  email: [
    (value: string) => regularExp.email.test(value),
    'Debe ser un correo válido',
  ],
  password: [
    (value: string) => isPasswordValid(value),
    `
    Mínimo 8 caracteres de longitud.
    Debe tener al menos una mayúscula.
    Debe tener al menos 1 número.`,
  ],
  confirmPassword: [(value: string) => value.trim().length > 2, ''],
  role: [(value: string) => value !== '', 'Selecciona un rol'],
};