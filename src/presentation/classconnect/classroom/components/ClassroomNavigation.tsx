import React from 'react'
import { menuClassroom } from '../../../../application/state/classroom/classroom.slice'
import { ClassroomNavigationItem } from './ClassroomNavigationItem'

export const ClassroomNavigation: React.FC = () => {
  return (
    <nav className='classroom-nav'>
      <ul className="classroom-nav__list">
        {
          menuClassroom.map( option => (
            <ClassroomNavigationItem key={option} text={option} />
          ))
        }
      </ul>
    </nav>
  )
}
