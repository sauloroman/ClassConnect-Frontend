import React from 'react'
import { Modal } from '../../../../../shared/components'
import { useClassroom, useModal } from '../../../../../../application/hooks'
import { formatDate } from '../../../../../shared/helpers'
import { GeneralListCategories } from './GeneralListCategories'

export const GeneralModalDetailsClassroom: React.FC = () => {

  const { onCloseModal } = useModal()
  const { classroom } = useClassroom()
  const {
    career,
    categories,
    color,
    createdAt, 
    description, 
    updatedAt,
    group,
    id,
    instructor,  
    title, 
    code,
  } = classroom!

  return (
    <Modal width={80}>
      <div className="general-modal-details">
        <div className="general-modal-details__container">
          <div className="general-modal-details__content">
            <ul className="general-modal-details__list">
              <li className="general-modal-details__item">
                Id:
                <span>{id}</span>
              </li>
              <li className="general-modal-details__item">
                Instructor:
                <span>{instructor.firstName} {instructor.lastName}</span>
              </li>
              <li className="general-modal-details__item">
                Nombre:
                <span>{title}</span>
              </li>
              <li className="general-modal-details__item">
                Carrera:
                <span>{career}</span>
              </li>
              <li className="general-modal-details__item">
                Grupo:
                <span>{group}</span>
              </li>
            </ul>
            <ul className="general-modal-details__list">
              <li className="general-modal-details__item">
                Fecha creación:
                <span>{formatDate(createdAt)}</span>
              </li>
              <li className="general-modal-details__item">
                Última modificación:
                <span>{ updatedAt ? formatDate(updatedAt) : 'Sin modificación'}</span>
              </li>
              <li className="general-modal-details__item">
                Categories:
                <GeneralListCategories categories={categories} />
              </li>
              <li className="general-modal-details__item">
                Código:
                <span className='u-pink'>{code}</span>
              </li>
              <li className="general-modal-details__item">
                Color:
                <span>{color || 'Sin color asignado'}</span>
              </li>
            </ul>
          </div>
          <p className="general-modal-details__item">Descripción: <span>{description || 'Sin descripción'}</span></p>
        </div>
        <div className="general-modal-details__button">
          <button className='btn btn--grad-3' onClick={ onCloseModal }>Cerrar</button>
        </div>
      </div>
    </Modal>
  )
}
