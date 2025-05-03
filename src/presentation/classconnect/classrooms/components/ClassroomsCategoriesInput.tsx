import React from 'react'
import { useClassroom } from '../../../../application/hooks'

interface ClassroomsCategoriesInputProps {
  categoriesAdded: string[],
  setCategories: ( categoryName: string[] ) => void
}

export const ClassroomsCategoriesInput: React.FC<ClassroomsCategoriesInputProps> = ({ categoriesAdded, setCategories }) => {

  const { categories } = useClassroom()

  const onAddCategory = ( categoryName: string ) => {
    if ( categoriesAdded.includes( categoryName ) ) {
      setCategories( categoriesAdded.filter( category => category !== categoryName ) )
    } else {
      setCategories([ ...categoriesAdded, categoryName ])
    }
  }

  return (
    <div className='classrooms-input-categories'>
      {
        categories.map( category => (
          <div 
            onClick={ () => onAddCategory(category.categoryName) } 
            className={`classrooms-input-categories__category ${ categoriesAdded.includes( category.categoryName ) && 'classrooms-input-categories__category--active' }`}
            key={category.id}
          >
            <p>{category.categoryName}</p>
          </div>
        ))
      }
    </div>
  )
}
