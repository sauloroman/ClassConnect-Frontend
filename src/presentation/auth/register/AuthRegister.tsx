import React, { useEffect, useState } from 'react';
import { Roles } from '../../../domain/entities';
import { useAuth } from '../../../application/hooks';

import { useForm, useNavigatePage, useValidatePassword } from '../../hooks';
import { AuthLayout } from '../layout/AuthLayout';
import { InputPassword } from '../../shared/components';
import { formData, formValidations } from './data/form-data';

export const AuthRegister: React.FC = () => {
  const {
    email,
    emailValid,
    firstName,
    firstNameValid,
    lastName,
    lastNameValid,
    password,
    passwordValid,
    confirmPassword,
    role,
    roleValid,
    isFormValid,
    formState,
    onInputChange,
  } = useForm(formData, formValidations);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { errorDifferentPasswords } = useValidatePassword( password, confirmPassword )
  const { registerAccount, isLoading, temporalUser } = useAuth()
  const { navigateToPage } = useNavigatePage()

  const onRegisterAccount = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);

    if ( !isFormValid || errorDifferentPasswords !== '' ) return

    const { confirmPassword, ...restFormState } = formState
    registerAccount( restFormState )
  }
  
  useEffect(() => {
    if ( !!temporalUser ) {
      navigateToPage('/classconnect/auth/validate-account')
    }
  }, [temporalUser])

  return (
    <AuthLayout
      pageName='register'
      title="Comienza"
      subtitle="Creando una cuenta"
      text="Crea una cuenta y comienza uniéndote a tus clases."
      textNavigate="¿Ya tienes una cuenta?"
      textLink="Inicia sesión"
      link="/classconnect/auth/login"
    >
      <div className="register">
        <form onSubmit={onRegisterAccount} className="form login__form">
          <div className="form__content">
            <div className="form__field">
              <input
                name="firstName"
                value={firstName}
                onChange={onInputChange}
                className="form__input"
                type="text"
                placeholder="Nombre(s)"
              />
              <span
                className={`form__span ${
                  !isFormValid && formSubmitted ? 'u-text-wrong' : null
                }`}
              >
                {firstNameValid}
              </span>
            </div>
            <div className="form__field">
              <input
                name="lastName"
                value={lastName}
                onChange={onInputChange}
                className="form__input"
                type="text"
                placeholder="Apellidos(s)"
              />
              <span
                className={`form__span ${
                  !isFormValid && formSubmitted ? 'u-text-wrong' : null
                }`}
              >
                {lastNameValid}
              </span>
            </div>
            <div className="form__field">
              <select
                className="form__input"
                name="role"
                value={role}
                onChange={onInputChange}
                defaultValue={''}
              >
                <option value=""></option>
                <option value={Roles.TEACHER}>Instructor</option>
                <option value={Roles.ADMIN}>Estudiante</option>
              </select>
              <span
                className={`form__span ${
                  !isFormValid && formSubmitted ? 'u-text-wrong' : null
                }`}
              >
                {roleValid}
              </span>
            </div>
            <div className="form__field">
              <input
                name="email"
                value={email}
                onChange={onInputChange}
                className="form__input"
                type="email"
                placeholder="Registra un correo electrónico"
              />
              <span
                className={`form__span ${
                  !isFormValid && formSubmitted ? 'u-text-wrong' : null
                }`}
              >
                {emailValid}
              </span>
            </div>

            <div className="form__passwords">
              <InputPassword
                name="password"
                value={password}
                onSetValue={onInputChange}
                placeholder="Crea una contraseña"
              />
              <InputPassword
                name="confirmPassword"
                value={confirmPassword}
                onSetValue={onInputChange}
                placeholder="Repite tu contraseña"
              />
            </div>
            <div className="flex flex-between">
              <span
                className={`form__span form__span--left ${
                  !isFormValid && formSubmitted ? 'u-text-wrong' : null
                }`}
              >
                {passwordValid?.split('.').map((condition) => (
                  <div key={condition}>
                    <span>{condition}</span>
                    <br />
                  </div>
                ))}
              </span>
              <span className='form__span'>{errorDifferentPasswords}</span>
            </div>

          </div>
          <div className="form__buttons">
            <button disabled={ isLoading } type="submit" className="form-button__submit">
              Registrar Cuenta
            </button>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};
