import React from 'react'
import { ClassroomsFilters } from '../..'
import { useModal } from '../../../../application/hooks'
import { ModalNames } from '../../../../application/state/modal/modal.slice'

export const ClassroomsHeader: React.FC = () => {

  const { onOpenModal } = useModal()

  return (
    <header className='classrooms-header'>
      <ClassroomsFilters />
      <div className="classrooms-header__button">
        <button 
          onClick={ () => onOpenModal( ModalNames.createClassroom ) } 
          className="btn btn--grad-3">
        Crear Clase</button>
      </div>
    </header>
  )
}
