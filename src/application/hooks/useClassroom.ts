import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../state/store"
import { CreateClassroomDto } from '../../domain/dto/classrooms.dto';
import { startCreatingClassroom, startGettingClassroomsOfUser } from "../state/classroom/classroom.thunk";

export const useClassroom = () => {

  const dispatch = useDispatch<any>()
  const { classrooms, isLoading } = useSelector( (state: RootState) => state.classrooms )

  const postClassroom = ( createClassroomDto: CreateClassroomDto ) => {
    dispatch( startCreatingClassroom(createClassroomDto) )
  }

  const getClassroomsByInstructorId = () => {
    dispatch( startGettingClassroomsOfUser() )
  }

  return {
    // Attributes
    classrooms,
    isLoadingClassrooms: isLoading,

    // Methods
    postClassroom,
    getClassroomsByInstructorId,
  }

}