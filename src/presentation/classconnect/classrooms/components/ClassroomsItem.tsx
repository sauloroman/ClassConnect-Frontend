import React, { useMemo } from 'react'
import { ClassroomEntity } from '../../../../domain/entities'
import { useNavigatePage } from '../../../hooks'
import { useClassroom } from '../../../../application/hooks'

interface ClassroomItemProps {
  classroom: ClassroomEntity
}

export const formatText = ( text: string, length: number ): string => {
  if ( text.length > length ) {
    return text.substring(0, length) + '...'
  }
  return text
}

export const ClassroomsItem: React.FC<ClassroomItemProps> = ({ classroom }) => {

  const { setClassroomPage } = useClassroom()
  const { navigateToPage } = useNavigatePage()
  const { title, group, career, categories, instructor } = classroom
  const formatTitle = useMemo(() => formatText(title, 18),[ title ])
  const formatInstructor = useMemo(() => formatText(`${instructor.firstName} ${instructor.lastName}`, 20), [ instructor ])
  const formatCareer = useMemo(() => formatText(career, 27),[ career ])

  const onNavigateToClassroom = () => {
    navigateToPage(`/classroom/${ classroom.id }`)
    setClassroomPage( classroom )
  }

  return (
    <li key={classroom.id} className="classrooms__item">
      <header onClick={onNavigateToClassroom} className="classrooms__item-cover">
        <div className="classrooms__item-title">
          <p className="classrooms__item-name">{ formatTitle }</p>
          <p className="classrooms__item-group">{ group }</p>
        </div>
      </header>
      <div className="classrooms__item-content">
        <p className="classrooms__item-career">{ formatCareer }</p>
        <div className="classrooms__item-categories">
          {
            categories?.map( (category) => (
              <div key={category.id} className='classrooms__item-category'>{ category.categoryName }</div>
            ))
          }
        </div>
      </div>
      <footer className="classrooms__item-footer">
        <p className='classrooms__item-instructor'>{formatInstructor}</p>
        <div className='classrooms__item-buttons'>
          <button className='classrooms__item-button'>
            <i className='bx bx-star classrooms__item-icon'></i>
          </button>
          <button className='classrooms__item-button'>
            <i className='bx bx-down-arrow-alt classrooms__item-icon'></i>
          </button>
        </div>
      </footer>
    </li>
  )
}
