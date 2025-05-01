import React from 'react'
import { useMenu } from '../../../../application/hooks'

export const ClassConnectAccordenMenu: React.FC = () => {

  const { IsAccordeonMenuOpen, openAccordeonMenu, closeAccordeonMenu } = useMenu()

  const onHandleIcon = () => {
    IsAccordeonMenuOpen 
      ? closeAccordeonMenu() 
      : openAccordeonMenu() 
  }

  return (
    <div className='classconnect-accordeon'>
      <i 
        onClick={ onHandleIcon } 
        className={`bx bxs-chevron-down ${IsAccordeonMenuOpen && 'classconnect-accordeon__icon--rotate'} classconnect-accordeon__icon`}
      >
      </i>
      {
        IsAccordeonMenuOpen
        &&  <ul className='classconnect-accordeon__menu'>
        <li className='classconnect-accordeon__title'>
          <p className='classconnect-accordeon__title-line'></p>
          <p>Opciones</p>
        </li>
        <li className='classconnect-accordeon__item'>
          <i className='bx bx-user classconnect-accordeon__menu-icon'></i>
          <p>Perfil</p>
        </li>
        <li className='classconnect-accordeon__item'>
          <i className='bx bx-cog classconnect-accordeon__menu-icon'></i>
          <p>Ajustes</p>
        </li>
        <li className='classconnect-accordeon__item'>
          <i className='bx bx-log-out classconnect-accordeon__menu-icon'></i>
          <p>Salir</p>
        </li>
      </ul>
      }
    </div>
  )
}
