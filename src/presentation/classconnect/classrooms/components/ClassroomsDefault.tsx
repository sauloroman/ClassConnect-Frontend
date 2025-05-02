import React from 'react'
import classroomsImageDefault from '../../../assets/img/classrooms-image-default.svg'

export const ClassroomsDefault: React.FC = () => {
  return (
    <div className='classrooms-default'>
      <img
        className='classrooms-default__image' 
        src={ classroomsImageDefault } 
        alt="Image classroom default" 
      />
      <p className="classrooms-default__message">Comienza creando una clase</p>
      <div className="classrooms-default__button">
        <button className='btn btn--grad-3'>Crear Clase</button>
      </div>
    </div>
  )
}
