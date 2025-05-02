import React from 'react'
import { ClassroomsFilters } from '../..'

export const ClassroomsHeader: React.FC = () => {
  return (
    <header className='classrooms-header'>
      <ClassroomsFilters />
      <div className="classrooms-header__button">
        <button className="btn btn--grad-3">Crear Clase</button>
      </div>
    </header>
  )
}
