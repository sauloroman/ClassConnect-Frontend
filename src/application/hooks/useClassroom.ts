import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../state/store"
import { setClassroom, setNavPageClassroom } from "../state/classroom/classroom.slice"
import { ClassroomEntity } from "../../domain/entities"

export const useClassroom = () => {
 
  const dispatch = useDispatch<any>()
  const { classroom, navPageClassroom } = useSelector( (state: RootState) => state.classroom )

  const onNavPageClassroom = ( namePage: string ) => {
    dispatch( setNavPageClassroom( namePage ) )
  }

  const setClassroomPage = ( classroom: ClassroomEntity ) => {
    dispatch( setClassroom(classroom) )
  }

  return {
    classroom,
    navPageClassroom,

    onNavPageClassroom,
    setClassroomPage,
  }

}