import { ForgotPassswordDto } from "../../../../domain/dto";
import { FormValidations } from "../../../hooks";
import { regularExp } from "../../../shared/utils";

export const formData: ForgotPassswordDto = {
  email: ''
}

export const formValidations: FormValidations<ForgotPassswordDto> = {
  email: [ (value: string) => regularExp.email.test( value ), 'El email no es valido' ]
}