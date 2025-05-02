import { useParams } from "react-router-dom"

export const useLocationPage = () => {

  const params = useParams()

  const getLocation = () => {
    const namePage = params['*']
    switch( namePage ) {
      case 'classrooms': 
        return 'Aulas'
      case 'resources': 
        return 'Recursos'
      case 'students': 
        return 'Estudiantes'
      case 'stats':
        return 'Estadísticas'
    }
  }

  return {
    getLocation
  }
}