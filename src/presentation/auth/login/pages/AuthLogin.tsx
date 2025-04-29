import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { InputPassword } from '../../../shared/components'
import { useForm } from '../../../hooks'
import { useAuth } from '../../../../application/hooks'
import { AuthLayout } from '../..'
import { formData, formValidations } from '../data/login-data'

export const AuthLogin: React.FC = () => {

  const {
    email,
    emailValid,
    password,
    passwordValid,
    formState,
    isFormValid,
    onInputChange,
  } = useForm( formData, formValidations )
  const [formSubmitted, setFormSubmitted] = useState(false)
  const { loginAccount, isLoading } = useAuth()

  const onLoginAccount = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted( true )

    if ( !isFormValid ) return

    loginAccount( formState )
  }

  return (
    <AuthLayout
      pageName='login'
      title='Hola,'
      subtitle='Bievenido de vuelta'
      text='Hey, te damos la bienvenida a tu espacio especial'
      textNavigate='¿No tienes una cuenta?'
      textLink='Crea una'
      link='/auth/register'
    >
      <>
        <form onSubmit={ onLoginAccount } className="form login__form">
          <div className="form__content">
            <div className="form__field">
              <input 
                name='email'
                value={email}
                onChange={onInputChange}
                className='form__input'
                type="email" 
                placeholder='Correo electrónico'
              />
              <span className={`form__span ${!isFormValid && formSubmitted ? 'u-text-wrong' : null}`}
              >{emailValid}</span>
            </div>
            <>
              <InputPassword 
                name='password'
                value={ password }
                onSetValue={ onInputChange }
                placeholder='Contraseña' 
              />
              <span className={`form__span ${!isFormValid && formSubmitted ? 'u-text-wrong' : null}`}
                >{passwordValid}</span>
            </>
            <div className="form__forgot-password-box">
              <Link to={'/auth/password/forgot-password'}>
                <p className='form__forgot-password'>Olvidé mi contraseña</p>
              </Link>
            </div>
          </div>
          <div className="form__buttons">
            <button 
              disabled={ isLoading } 
              type='submit' 
              className='btn btn--grad-1 u-w-100'>🔐 Iniciar sesión</button>
          </div>
        </form>
      </>
    </AuthLayout>
  )
}
