import { CreateClassroomDto } from "../../../../domain/dto/classrooms.dto";
import { FormValidations } from "../../../hooks";

export const formData: Partial<CreateClassroomDto> = {
  title: '',
  career: '',
  group: '',
}

export const formValidations: FormValidations<CreateClassroomDto> = {
  title: [ (value: string) => value.trim().length >= 2, 'El nombre de la clase es necesario'],
  career: [ (value: string) => value.trim().length >= 2, 'La carrera es necesaria'],
  group: [ (value: string) => value.trim().length >= 2, 'El grupo es necesario'],
}