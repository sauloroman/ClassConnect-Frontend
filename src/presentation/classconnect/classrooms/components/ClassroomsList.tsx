import React from 'react'
import { useClassroom } from '../../../../application/hooks'
import { ClassroomsItem, ClassroomsPagination } from '../../'

export const ClassroomsList: React.FC = () => {
  const { classrooms } = useClassroom()

  return (
    <>
      <ul className='classrooms__list'>
        {
          classrooms.map( classroom => (
            <ClassroomsItem key={classroom.id} classroom={classroom} />
          ))
        }
      </ul>
      <ClassroomsPagination />
    </>
  )
}
