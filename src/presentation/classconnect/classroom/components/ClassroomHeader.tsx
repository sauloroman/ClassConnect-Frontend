import React from 'react'
import { ClassroomNavigation } from './ClassroomNavigation'
import { useMenu } from '../../../../application/hooks'

export const ClassroomHeader: React.FC = () => {

  const { IsAsideMenuOpen } = useMenu()

  return (
    <div className={`classroom-header ${!IsAsideMenuOpen && 'classroom-header--small'}`}>
      <ClassroomNavigation />
      <button className="classroom-header__button">
        <i className='bx bx-cog classroom-header__icon'></i>
      </button>
    </div>
  )
}
