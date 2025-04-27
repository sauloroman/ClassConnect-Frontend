import React, { useEffect } from 'react'
import { useAuth } from '../../../application/hooks'
import { getLocalStorage } from '../../shared/helpers'
import { ValidateAccountForm } from './components/ValidateAccountForm'
import logo from '../../assets/img/logo-background-white.png'

export const AuthValidateAccount: React.FC = () => {

  const { stablishTempUser, temporalUser } = useAuth()

  useEffect(() => {
    const tempUser = getLocalStorage('classconnectTempUser')
    stablishTempUser( tempUser )
  }, [])

  return (
    <div className='validate-account'>
      <img src={logo} alt="Classconnect White Logo" className="validate-account__logo" />
      <div className="validate-account__container">
        <div className="validate-account__content">
          <h1 className='heading-secondary u-text-center'>Valida tu correo electrónico</h1>
          <p className='validate-account__text'>Se ha enviado un correo electrónico a <span>{temporalUser?.email}</span>, para validar tu cuenta.</p>
        </div>
        <ValidateAccountForm />
      </div>
    </div>
  )
}
