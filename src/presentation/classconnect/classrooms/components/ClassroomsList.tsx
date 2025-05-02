import React from 'react'
import { useClassroom } from '../../../../application/hooks'
import { ClassroomsItem } from './ClassroomsItem'
import { ClassroomsHeader } from './ClassroomsHeader'

export const ClassroomsList: React.FC = () => {

  const { classrooms } = useClassroom()

  return (
    <>
      <ClassroomsHeader />
      <ul className='classrooms__list'>
        {
          classrooms.map( classroom => (
            <ClassroomsItem key={classroom.id} classroom={classroom} />
          ))
        }
      </ul>
    </>
  )
}
