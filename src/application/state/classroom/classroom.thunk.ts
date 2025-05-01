import { Dispatch } from "@reduxjs/toolkit";
import { CreateClassroomDto } from "../../../domain/dto/classrooms.dto";
import { addClassrooms, setIsLoadingClassrooms } from "./classroom.slice";
import { showAlertError, showAlertSuccess } from "../alert/alert.slice";
import { ClassConnectAPIClassroomRepository } from "../../../infrastructure/repositories/classroom.repository.imp";
import { ClassroomService } from "../../service/classroom.service";

const classroomRepo = new ClassConnectAPIClassroomRepository()
const classroomService = new ClassroomService({ classroomRepo })

export const startCreatingClassroom = ( createClassroomDto: CreateClassroomDto ) => {
  return async( dispatch: Dispatch ) => {

    dispatch( setIsLoadingClassrooms( true ) )

    try {

      const data = await classroomService.createClassroom( createClassroomDto )
      const { data: classroom, msg } = data

      dispatch( addClassrooms( classroom ) )
      dispatch( showAlertSuccess( msg ) )

    } catch (error) {
      dispatch( showAlertError( error as string ) )
    }

    dispatch( setIsLoadingClassrooms( false ) )

  }
}