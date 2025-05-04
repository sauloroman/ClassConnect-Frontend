import React from 'react'
import { useClassrooms } from '../../../../application/hooks'

const categoryNameCapitalized = ( categoryName: string ): string => {
  return categoryName.replace( categoryName[0], categoryName[0].toUpperCase() )
}

export const ClassroomsFilters: React.FC = () => {

  const { categories, setFilterClassroomsCategory, filterCategory } = useClassrooms()

  return (
    <ul className='classrooms-categories'>
      <li 
        onClick={ () => setFilterClassroomsCategory('todos')}
        className={`${ filterCategory === "todos" && 'classrooms-categories__item--active'} classrooms-categories__item`}>
      Todos</li>
      {
        categories.map( ({categoryName, id}) => (
          <li 
            onClick={ () => setFilterClassroomsCategory( categoryName ) }
            className={`${categoryName === filterCategory && 'classrooms-categories__item--active'} classrooms-categories__item`} 
            key={id}
          >
            {categoryNameCapitalized(categoryName)}
          </li>
        ))
      }
    </ul>
  )
}
