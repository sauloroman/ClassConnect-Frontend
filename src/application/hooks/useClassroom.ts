import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../state/store"
import { setNavPageClassroom } from "../state/classroom/classroom.slice"

export const useClassroom = () => {
 
  const dispatch = useDispatch<any>()
  const { classroom, navPageClassroom } = useSelector( (state: RootState) => state.classroom )

  const onNavPageClassroom = ( namePage: string ) => {
    dispatch( setNavPageClassroom( namePage ) )
  }

  return {
    classroom,
    navPageClassroom,

    onNavPageClassroom,
  }

}