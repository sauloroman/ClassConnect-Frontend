import React from 'react'
import { AuthPasswordLayout } from '../../layout/password/AuthPasswordLayout'

export const AuthChangePassword: React.FC = () => {
  return (
    <AuthPasswordLayout showReturnButton={false}>
      <h1 className='heading-primary'>Cambia tu <br /> Contaseña</h1>
    </AuthPasswordLayout>
  )
}
