import React from 'react'
import classroomsImageDefault from '../../../assets/img/classrooms-image-default.svg'
import { useModal } from '../../../../application/hooks'
import { ModalNames } from '../../../../application/state/modal/modal.slice'

export const ClassroomsDefault: React.FC = () => {
  
  const { onOpenModal } = useModal()

  return (
    <div className='classrooms-default'>
      <img
        className='classrooms-default__image' 
        src={ classroomsImageDefault } 
        alt="Image classroom default" 
      />
      <p className="classrooms-default__message">Comienza creando una clase</p>
      <div className="classrooms-default__button">
        <button onClick={ () => onOpenModal(ModalNames.createClassroom) } className='btn btn--grad-3'>Crear Clase</button>
      </div>
    </div>
  )
}
