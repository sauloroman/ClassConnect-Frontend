import React from 'react'
import { useMenu } from '../../../../application/hooks'

export const ClassConnectMenu: React.FC = () => {

  const { IsAsideMenuOpen, openAsideMenu, closeAsideMenu } = useMenu()

  const onHandleAsideMenu = () => {
    IsAsideMenuOpen
    ? closeAsideMenu()
    : openAsideMenu()
  }

  return (
    <div className="classconnect-menu">
      <i 
        onClick={ onHandleAsideMenu } 
        className={`bx bx-chevrons-right ${ IsAsideMenuOpen && 'classconnect-menu__icon--rotate' } classconnect-menu__icon`}
      >
      </i>
    </div>
  )
}
