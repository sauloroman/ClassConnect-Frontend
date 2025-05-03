import React from 'react'
import { LogoClassConnect } from '../logo/LogoClassConnect'
import { useModal } from '../../../../application/hooks'

interface ModalProps {
  children: React.ReactNode
}

export const Modal: React.FC<ModalProps> = ({ children }) => {

  const { onCloseModal } = useModal()

  return (
    <div className='modal'>
      <div className="modal__container">
        <header className="modal__header">
          <LogoClassConnect width={40} />
          <button onClick={ onCloseModal } className='modal__button'>
            <i className='bx bx-x modal__icon'></i>
          </button>
        </header>
        {children}
      </div>
    </div>
  )
}
