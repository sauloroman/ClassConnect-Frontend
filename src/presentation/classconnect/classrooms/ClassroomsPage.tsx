import React, { useEffect } from 'react'
import { ClassConnectLayout } from '../layout/ClassConnectLayout'
import { useClassroom } from '../../../application/hooks'
import { 
  ClassConnectNavigation, 
  ClassroomsDefault, 
  ClassroomsDisplayModals, 
  ClassroomsHeader, 
  ClassroomsList 
} from '../'
import { LoadingSpinner } from '../../shared/components'

export const ClassroomsPage: React.FC = () => {

  const { 
    getClassroomsByInstructorId, 
    isLoadingClassrooms, 
    classrooms,
    filterCategory
  } = useClassroom()

  useEffect(() => {
    getClassroomsByInstructorId()
  }, [ filterCategory ])

  return (
    <ClassConnectLayout>
      <ClassConnectNavigation name='Clases Creadas' />
      <ClassroomsHeader />
      {
        isLoadingClassrooms
        ? (
          <div className='u-h-90vh flex flex-center'><LoadingSpinner /></div>
        )
        : 
        (
          classrooms.length > 0
          ? (<ClassroomsList />)
          : (<ClassroomsDefault />)
        )
      }

      <ClassroomsDisplayModals />
    </ClassConnectLayout>
  )
}
