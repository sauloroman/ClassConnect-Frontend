import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../state/store"
import { CreateClassroomDto } from '../../domain/dto/classrooms.dto';
import { startCreatingClassroom } from "../state/classroom/classroom.thunk";

export const useClassroom = () => {

  const dispatch = useDispatch<any>()
  const { classrooms } = useSelector( (state: RootState) => state.classrooms )

  const postClassroom = ( createClassroomDto: CreateClassroomDto ) => {
    dispatch( startCreatingClassroom(createClassroomDto) )
  }

  return {
    // Attributes
    classrooms,

    // Methods
    postClassroom,
  }

}