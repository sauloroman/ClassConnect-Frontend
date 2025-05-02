import React, { useEffect } from 'react'
import { ClassConnectLayout } from '../layout/ClassConnectLayout'
import { useClassroom } from '../../../application/hooks'
import { ClassConnectNavigation, ClassroomsDefault, ClassroomsList } from '../'
import { LoadingSpinner } from '../../shared/components'

export const ClassroomsPage: React.FC = () => {

  const { 
    getClassroomsByInstructorId, 
    getClassroomsCategories,
    isLoadingClassrooms, 
    classrooms 
  } = useClassroom()

  useEffect(() => {
    getClassroomsByInstructorId()
    getClassroomsCategories()
  }, [])

  return (
    <ClassConnectLayout>
      <ClassConnectNavigation name='Clases Creadas' />
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
    </ClassConnectLayout>
  )
}
