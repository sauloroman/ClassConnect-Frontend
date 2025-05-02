import React, { useMemo } from 'react'
import { ClassroomEntity } from '../../../../domain/entities'

interface ClassroomItemProps {
  classroom: ClassroomEntity
}

export const ClassroomsItem: React.FC<ClassroomItemProps> = ({ classroom }) => {

  const { title, group, career, categories } = classroom

  const formatCareer = useMemo(() => {
    if ( career.length > 27 ) {
      return career.substring(0, 27) + '...'
    }
    return career
  },[ career ])

  return (
    <li key={classroom.id} className="classrooms__item">
      <header className="classrooms__item-cover">
        <div className="classrooms__item-title">
          <p className="classrooms__item-name">{ title }</p>
          <p className="classrooms__item-group">{ group }</p>
        </div>
      </header>
      <div className="classrooms__item-content">
        <p className="classrooms__item-career">{ formatCareer }</p>
        <div className="classrooms__item-categories">
          {
            categories.map( (category) => (
              <div className='classrooms__item-category'>{ category.categoryName }</div>
            ))
          }
        </div>
      </div>
      <footer className="classrooms__item-footer">
        <i className='bx bx-star classrooms__item-button'></i>
        <i className='bx bx-folder classrooms__item-button'></i>
      </footer>
    </li>
  )
}
