import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../state/store"
import { CreateClassroomDto } from '../../domain/dto/classrooms.dto';
import { startCreatingClassroom, startGettingClassroomsCategories, startGettingClassroomsOfUser } from "../state/classroom/classroom.thunk";

export const useClassroom = () => {

  const dispatch = useDispatch<any>()
  const { classrooms, isLoading, categories } = useSelector( (state: RootState) => state.classrooms )

  const postClassroom = ( createClassroomDto: CreateClassroomDto ) => {
    dispatch( startCreatingClassroom(createClassroomDto) )
  }

  const getClassroomsByInstructorId = () => {
    dispatch( startGettingClassroomsOfUser() )
  }

  const getClassroomsCategories = () => {
    dispatch( startGettingClassroomsCategories() )
  }

  return {
    // Attributes
    classrooms,
    isLoadingClassrooms: isLoading,
    categories,

    // Methods
    postClassroom,
    getClassroomsByInstructorId,
    getClassroomsCategories
  }

}