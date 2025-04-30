import React, { useEffect, useState } from 'react'
import { AuthPasswordLayout } from '../../layout/password/AuthPasswordLayout'
import { useAuth } from '../../../../application/hooks'
import { LoadingSpinner } from '../../../shared/components'
import { PasswordFormNew } from '../components/PasswordFormNew'
import { useNavigatePage, useToken } from '../../../hooks'

export const AuthChangePassword: React.FC = () => {
  
  const { isLoading } = useAuth()
  const { getTokenFromParams } = useNavigatePage()
  const { decodeToken } = useToken()
  const [tokenData, setTokenData] = useState<string>()
  
  useEffect(() => {
    const token = getTokenFromParams()
    const info = decodeToken<{ email: string }>( token )
    setTokenData( info.email )
  }, [])

  return (
    <AuthPasswordLayout colorWave='#B06AB3'>
      <h1 className='heading-secondary'>Cambia tu Contaseña</h1>
      <p>Coloca tu nueva contraseña para actualizar tus datos. Guardala en un lugar seguro y no pierdas tu cuenta.</p>

      {!isLoading ? (
        <PasswordFormNew email={ tokenData! } />
      ) : (
          <div className="u-my-8">
            <LoadingSpinner />
          </div>
      )}

    </AuthPasswordLayout>
  )
}
