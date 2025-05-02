import React, { useEffect } from 'react'
import { ClassConnectLayout } from '../layout/ClassConnectLayout'
import { useClassroom } from '../../../application/hooks'
import { ClassroomsList } from '../'

export const ClassroomsPage: React.FC = () => {

  const { getClassroomsByInstructorId } = useClassroom()

  useEffect(() => {
    getClassroomsByInstructorId()
  }, [])

  return (
    <ClassConnectLayout>
      <ClassroomsList />
    </ClassConnectLayout>
  )
}
