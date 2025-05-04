import React from 'react'
import { useClassroom } from '../../../../application/hooks'
import { GeneralView } from '../views/general/GeneralView'
import { AssignmentsView } from '../views/assignments/AssignmentsView'
import { StudentsView } from '../views/students/StudentsView'
import { ScoresView } from '../views/scores/ScoresView'

export const ClassroomView: React.FC = () => {

  const { navPageClassroom } = useClassroom()

  return (
    <>
      { navPageClassroom === 'general' && <GeneralView /> }
      { navPageClassroom === 'trabajos' && <AssignmentsView /> }
      { navPageClassroom === 'estudiantes' && <StudentsView /> }
      { navPageClassroom === 'calificaciones' && <ScoresView /> }
    </>
  )
}
