import React from 'react'
import { Link } from 'react-router-dom'
import { AuthLayout } from '../layout/AuthLayout'
import { InputPassword } from '../../shared/components'

export const AuthLogin: React.FC = () => {
  return (
    <AuthLayout
      title='Hola,'
      subtitle='Bievenido de vuelta'
      text='Hey, te damos la bienvenida a tu espacio especial'
      textNavigate='¿No tienes una cuenta?'
      textLink='Crea una'
      link='/auth/register'
    >
      <div className="login">
        
        <form className="form login__form">
          <div className="form__content">
            <div className="form__field">
              <input 
                className='form__input'
                type="email" 
                placeholder='Correo electrónico'
              />
            </div>
            <InputPassword placeholder='Contraseña' />
            <div className="form__forgot-password">
              <Link to={'/auth/forgot-password'}>
                <p className='login__forgot-password'>Olvidé mi contraseña</p>
              </Link>
            </div>
          </div>
          <div className="form__buttons">
            <button type='submit' className='form-button__submit'>Iniciar sesión</button>
          </div>
        </form>
      </div>
    </AuthLayout>
  )
}
