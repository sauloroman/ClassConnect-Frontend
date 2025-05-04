import React from 'react'
import { useClassroom } from '../../../../application/hooks';

interface ClassroomNavigationItemProps {
  text: string;
}

export const ClassroomNavigationItem: React.FC<ClassroomNavigationItemProps> = ({
  text
}) => {

  const { onNavPageClassroom, navPageClassroom } = useClassroom()

  return (
    <li 
      onClick={ () => onNavPageClassroom( text )} 
      className={`
        classroom-nav__item 
        ${ navPageClassroom === text && 'classroom-nav__item--active' }
      `}
    >{ text.replace( text[0], text[0].toUpperCase() ) }</li>
  )
}
