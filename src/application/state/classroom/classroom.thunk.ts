import { Dispatch } from "@reduxjs/toolkit";
import { CreateClassroomDto } from "../../../domain/dto/classrooms.dto";
import { addClassrooms, setClassrooms, setClassroomsCategories, setIsLoadingClassrooms, setPagination } from "./classroom.slice";
import { showAlertError, showAlertSuccess } from "../alert/alert.slice";
import { ClassConnectAPIClassroomRepository } from "../../../infrastructure/repositories/classroom.repository.imp";
import { ClassroomService } from "../../service/classroom.service";
import { RootState } from "../store";

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

export const startGettingClassroomsOfUser = () => {
  return async( dispatch: Dispatch, getState: () => RootState ) => {

    dispatch( setIsLoadingClassrooms(true) )

    try {

      const { auth: { user }, classrooms: { pagination }} = getState()

      const data = await classroomService.getClassrooomsOfInstructorId( 
        user?.id!, 
        pagination.currentPage, 
        pagination.limit 
      )
      
      dispatch( setClassrooms(data.items) )
      dispatch( setPagination(data.meta) )

    } catch (error) {
      console.log(error)
      dispatch( showAlertError(error as string) )
    }

    dispatch( setIsLoadingClassrooms(false) )

  }
}

export const startGettingClassroomsCategories = () => {
  return async ( dispatch: Dispatch ) => {   
    try {
      const {categories} = await classroomService.getClassroomsCategories()
      dispatch( setClassroomsCategories( categories ) )
    } catch (error) {
      console.log(error)
    }
  }
}