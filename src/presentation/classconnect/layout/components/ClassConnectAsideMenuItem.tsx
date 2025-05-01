import React from 'react'
import { NavLink } from 'react-router-dom'
import { useMenu } from '../../../../application/hooks'

interface ClassConnectAsideMenuItemProps {
  route: string;
  name: string;
  icon: string;
}

export const ClassConnectAsideMenuItem: React.FC<ClassConnectAsideMenuItemProps> = ({ 
  route, 
  name, 
  icon 
}) => {

  const { IsAsideMenuOpen } = useMenu()

  return (
    <NavLink 
      to={`/${route}`} 
      className={({ isActive }) => 
        `classconnect-aside__item ${isActive && 'classconnect-aside__item--active'} ${isActive && !IsAsideMenuOpen && 'u-w-250'}`
      }
    >
      <div className="classconnect-aside__content">
        <i className={`classconnect-aside__icon bx bx-${icon}`}></i>
        { IsAsideMenuOpen && <p className='classconnect-aside__name'>{name}</p> } 
      </div>
    </NavLink>
  )
}
