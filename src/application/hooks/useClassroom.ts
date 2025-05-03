import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { RootState } from "../state/store"
import { CreateClassroomDto } from '../../domain/dto/classrooms.dto';
import { startCreatingClassroom, startGettingClassroomsCategories, startGettingClassroomsOfUser } from "../state/classroom/classroom.thunk";
import { setFilterCategory, setPage } from "../state/classroom/classroom.slice";

export const useClassroom = () => {

  const dispatch = useDispatch<any>()
  const { classrooms, isLoading, categories, filterCategory, pagination } = useSelector( (state: RootState) => state.classrooms, shallowEqual )

  const postClassroom = ( createClassroomDto: CreateClassroomDto ) => {
    dispatch( startCreatingClassroom(createClassroomDto) )
  }

  const getClassroomsByInstructorId = () => {
    dispatch( startGettingClassroomsOfUser() )
  }

  const getClassroomsCategories = () => {
    dispatch( startGettingClassroomsCategories() )
  }

  const setFilterClassroomsCategory = ( category: string ) => {
    dispatch( setFilterCategory( category ) )
    dispatch(setPage(1))
    dispatch(startGettingClassroomsOfUser())
  }

  const onNextPage = () => {
    const { nextPage } = pagination
    if (!nextPage) return
    dispatch(setPage(nextPage))
    dispatch( startGettingClassroomsOfUser() )
  }

  const onPrevPage = () => {
    const { prevPage } = pagination
    if ( !prevPage ) return
    dispatch(setPage(prevPage))
    dispatch( startGettingClassroomsOfUser() )
  }

  return {
    // Attributes
    classrooms,
    filterCategory,
    isLoadingClassrooms: isLoading,
    categories,
    paginationClassrooms: pagination,

    // Methods
    postClassroom,
    getClassroomsByInstructorId,
    getClassroomsCategories,
    setFilterClassroomsCategory,
    onNextPage,
    onPrevPage,
  }

}