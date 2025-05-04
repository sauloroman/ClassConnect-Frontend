import { Dispatch } from "@reduxjs/toolkit";
import { CreateClassroomDto } from "../../../domain/dto/classrooms.dto";
import { setClassrooms, setClassroomsCategories, setIsLoadingClassrooms, setPagination } from "./classrooms.slice";
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
      const { data: classrooms, msg } = data
      const { items, meta } = classrooms

      dispatch( setClassrooms(items) )
      dispatch( setPagination( meta ) )
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

      const { auth: { user }, classrooms: { pagination, filterCategory } } = getState()

      const {categories} = await classroomService.getClassroomsCategories()
      dispatch( setClassroomsCategories( categories ) )

      const data = await classroomService.getClassrooomsOfInstructorId( 
        user?.id!, 
        pagination.currentPage, 
        pagination.limit,
        filterCategory,
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