import { jwtAdapter } from "../shared/plugins"

export const useToken = () => {

  const decodeToken = <T>( token: string ) => {
    const data = jwtAdapter.validateToken<T>( token )
    return data
  }

  return {
    decodeToken
  }

}