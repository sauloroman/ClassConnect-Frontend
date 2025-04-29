import React, { useEffect, useState } from 'react'
import { AuthValidateAccountLayout, ValidateAccountForm } from '../../'
import { useNavigatePage, useToken } from '../../../hooks'

export const AuthValidateAccount: React.FC = () => {

  const { getTokenFromParams } = useNavigatePage()
  const { decodeToken } = useToken()
  const [email, setEmail] = useState<string>('')

  useEffect(() => {
    const token = getTokenFromParams()
    const data = decodeToken<{ email: string, id: string }>( token )
    setEmail( data?.email! )
  }, [])

  return (
    <AuthValidateAccountLayout
      title='🔒 Ingresa tu codigo'
      subtitle={`Correo: ${email}`}
      message='Para iniciar sesión, ingresa el código de verificación recibido'
    >
      <ValidateAccountForm email={email} />
    </AuthValidateAccountLayout>
  )
}
