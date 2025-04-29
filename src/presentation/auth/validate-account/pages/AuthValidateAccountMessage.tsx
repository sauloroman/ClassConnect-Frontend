import React, { useEffect } from 'react'
import { useAuth } from '../../../../application/hooks'
import { ValidateAccountTimer } from '../components/ValidateAccountTimer'
import { AuthValidateAccountLayout } from '../../layout/validate-account/AuthValidateAccountLayout'
import { useNavigatePage } from '../../../hooks'

export const AuthValidateAccountMessage: React.FC = () => {

  const { verificationCodeSent: { email }, setTempEmail} = useAuth()
  const { navigateToPage } = useNavigatePage()

  useEffect(() => {  
    const tempEmail = localStorage.getItem('classconnectTempEmail') || null
    setTempEmail( tempEmail )
  }, [])

  const message = `Se ha enviado un correo electrónico a ${email} Sigue los pasos para validar tu cuenta.`
  
  if ( !email ) {
    return (
      <AuthValidateAccountLayout
        title='No se puede validar correo'
        subtitle='Sin enviar'
        message='Para poder validar tu cuenta debes registrarte primero'
      >
        <div className="flex flex-center">
          <button className='btn btn--grad-2' onClick={ () => navigateToPage('/auth/register') }>&larr; {' '} Registrar cuenta</button>
        </div>
      </AuthValidateAccountLayout>
    )
  }

  return (
    <AuthValidateAccountLayout
      title='🚀 Valida tu correo electrónico'
      subtitle='Revisa tu correo'
      message={ message }
    >
      <ValidateAccountTimer />
    </AuthValidateAccountLayout>
  )
} 
