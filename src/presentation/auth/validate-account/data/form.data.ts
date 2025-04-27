import { ValidateAccountDto } from "../../../../domain/dto";
import { FormValidations } from "../../../hooks";

export const formData: ValidateAccountDto = {
  email: '',
  code: ''
}

export const formValidations: FormValidations<ValidateAccountDto> = {
  code: [ (value: string) => value.trim().length >= 5, 'El código es necesario'], 
}