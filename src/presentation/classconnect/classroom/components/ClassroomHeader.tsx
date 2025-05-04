import React from 'react'
import { ClassroomNavigation } from './ClassroomNavigation'

export const ClassroomHeader: React.FC = () => {
  return (
    <div className='classroom-header'>
      <ClassroomNavigation />
      <button className="classroom-header__button">
        <i className='bx bx-cog classroom-header__icon'></i>
      </button>
    </div>
  )
}
