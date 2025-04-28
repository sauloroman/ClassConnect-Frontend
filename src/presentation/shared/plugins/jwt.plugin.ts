import jwt from 'jsonwebtoken'
import { getEnvVariables } from '../helpers'
const {VITE_JWT_SEED} = getEnvVariables()

export const jwtAdapter = {

  generateJWT: async ( payload: any ) => new Promise(( res ) => {
    
    jwt.sign( payload, VITE_JWT_SEED, { expiresIn: '3h' }, ( err, token ) => {
      if ( err ) return res( null )
      res( token )
    })

  }),

  validateToken: async <T>( token: string ): Promise<T | null> => new Promise( res => {

    jwt.verify( token, VITE_JWT_SEED, ( err: any, decode: any ) => {
      if ( err ) return res( null )
      res( decode as T )
    })

  })

} 