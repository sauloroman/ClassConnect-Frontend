import React, { useEffect } from 'react'
import { useAuth } from '../../../../application/hooks'
import logo from '../../../assets/img/logo-background-white.png'
import { ValidateAccountTimer } from './ValidateAccountTimer'

export const ValidateAccountMessage: React.FC = () => {

  const { verificationCodeSent: { email }, setTempEmail} = useAuth()

  useEffect(() => {
    const tempEmail = localStorage.getItem('classconnectTempEmail') || ''
    setTempEmail( tempEmail )
  }, [])

  return (
    <div className='validate-account-message'>
      <img src={logo} alt="Classconnect White Logo" className="validate-account-message__logo" />
      <div className="validate-account-message__container">
        
        <div className="validate-account-message__content">
          <h1 className='heading-secondary u-text-center'>🚀 Valida tu correo electrónico</h1>
          <div className="flex flex-center">
            <p className="validate-account-message__strong">Revisa tu correo</p>
          </div>
          <p className='validate-account-message__text'>Se ha enviado un correo electrónico a <span>{ email }.</span> <br /> Sigue los pasos para validar tu cuenta.</p>
        </div>
        <ValidateAccountTimer />
      </div>
    </div>
  )
} 
