import { jwtDecode } from 'jwt-decode'

export const jwtAdapter = {
  
  validateToken: <T>( token: string ) => {
    const data = jwtDecode<T>( token )
    return data
  }

} 