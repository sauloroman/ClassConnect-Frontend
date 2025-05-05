import React from 'react'
import { useModal } from '../../../../../../application/hooks'
import { ModalNames } from '../../../../../../application/state/modal/modal.slice'
import { ClassroomCategoryEntity } from '../../../../../../domain/entities/classroom-category.entity';
import { GeneralListCategories } from './GeneralListCategories';

interface GeneralInfoProps {
  name: string,
  title: string,
  categories: ClassroomCategoryEntity[],
}

export const GeneralInfo: React.FC<GeneralInfoProps> = ({ title, categories, name }) => {
  
  const { onOpenModal } = useModal()

  return (
    <div className='general-info'>
      <p className="general-info__title">Detalles de clase</p>
      <div className="general-info__content">
        <p>{name}</p>
        <p className='general-info__name'>{title}</p>
        <GeneralListCategories categories={categories} />
      </div>
      <div className="flex flex-end">
        <button 
          onClick={ () => onOpenModal( ModalNames.showClassroomDetails ) } 
          className='general-info__button'>Ver Detalles
        </button>
      </div>
    </div>
  )
}
