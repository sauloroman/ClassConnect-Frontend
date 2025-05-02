import React from 'react'
import { useClassroom } from '../../../../application/hooks'

const categoryNameCapitalized = ( categoryName: string ): string => {
  return categoryName.replace( categoryName[0], categoryName[0].toUpperCase() )
}

export const ClassroomsFilters: React.FC = () => {

  const { categories } = useClassroom()

  return (
    <ul className='classrooms-categories'>
      <li className="classrooms-categories__item">Todos</li>
      {
        categories.map( ({categoryName, id}) => (
          <li className='classrooms-categories__item' key={id}>
            {categoryNameCapitalized(categoryName)}
          </li>
        ))
      }
    </ul>
  )
}
