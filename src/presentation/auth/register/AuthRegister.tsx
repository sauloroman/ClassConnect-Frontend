import React from 'react'
import { AuthLayout } from '../layout/AuthLayout'
import { InputPassword } from '../../shared/components'

export const AuthRegister: React.FC = () => {
  return (
    <AuthLayout
      title="Comienza"
      subtitle="Creando una cuenta"
      text="Crea una cuenta y comienza uniéndote a tus clases."
      textNavigate='¿Ya tienes una cuenta?'
      textLink='Inicia sesión'
      link='/auth/login'
    >
      <div className="register">
        <form className="form login__form">
          <div className="form__content">
            <div className="form__field">
              <input
                className="form__input"
                type="text"
                placeholder="Nombre(s)"
              />
            </div>
            <div className="form__field">
              <input
                className="form__input"
                type="text"
                placeholder="Apellidos(s)"
              />
            </div>
            <div className="form__field">
              <input
                className="form__input"
                type="email"
                placeholder="Registra un correo electrónico"
              />
            </div>
            <InputPassword placeholder="Crea una contraseña" />
            <InputPassword placeholder="Repite tu contraseña" />
          </div>
          <div className="form__buttons">
            <button type="submit" className="form-button__submit">
              Registrar Cuenta
            </button>
          </div>
        </form>
      </div>
    </AuthLayout>
  )
}
