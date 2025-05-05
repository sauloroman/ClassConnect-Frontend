import React from 'react'
import { LogoClassConnect } from '../logo/LogoClassConnect'
import { useModal } from '../../../../application/hooks'

interface ModalProps {
  children: React.ReactNode
  width?: number,
}

export const Modal: React.FC<ModalProps> = ({ children, width }) => {

  const { onCloseModal } = useModal()

  return (
    <div className='modal'>
      <div style={{ width: `${width}rem`}} className="modal__container">
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
