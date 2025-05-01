import React, { useMemo } from 'react'
import { useAuth, useMenu } from '../../../../application/hooks'
import { Roles } from '../../../../domain/entities'
import { teacherMenu } from '../../../../infrastructure'
import { ClassConnectAsideMenuItem } from './ClassConnectAsideMenuItem'

export const ClassConnectAsideMenu: React.FC = () => {

  const { IsAsideMenuOpen } = useMenu()
  const { user } = useAuth()
  const role = user!.role

  const menuToDisplay = useMemo(() => {

    if ( role === Roles.TEACHER ) {
      return teacherMenu
    } else if ( role === Roles.STUDENT ) {
      return []
    } else {
      return []
    }

  }, [role])

  return (
    <aside className={`classconnect-aside ${!IsAsideMenuOpen && 'classconnect-aside-small' }`}>
      <ul className="classconnect-aside__list">
        {
          menuToDisplay.map( menuItem => (
            <ClassConnectAsideMenuItem 
              key={ menuItem.name }
              icon={ menuItem.icon }
              name={ menuItem.name }
              route={ menuItem.route }
            />
          ))
        }
      </ul>
    </aside>
  )
}
