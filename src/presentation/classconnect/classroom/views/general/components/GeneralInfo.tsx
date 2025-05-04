import React from 'react'
import { useModal } from '../../../../../../application/hooks'
import { ModalNames } from '../../../../../../application/state/modal/modal.slice'

interface GeneralInfoProps {
  title: string
}

export const GeneralInfo: React.FC<GeneralInfoProps> = ({ title }) => {
  
  const { onOpenModal } = useModal()

  return (
    <div className='general-info'>
      <p className="general-info__title">Detalles de clase</p>
      <div className="general-info__content">
        <p>{title}</p>
        <button onClick={ () => onOpenModal( ModalNames.showClassroomDetails ) } className='general-info__button'>Detalles</button>
      </div>
    </div>
  )
}
