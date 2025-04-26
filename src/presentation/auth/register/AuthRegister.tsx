import React, { useEffect, useState } from 'react';
import { RegisterAccountDto } from '../../../domain/dto';
import { Roles } from '../../../domain/entities';
import { AuthLayout } from '../layout/AuthLayout';
import { InputPassword } from '../../shared/components';
import { FormValidations, useForm } from '../../hooks';
import { regularExp } from '../../shared/utils';
import { isPasswordValid } from '../../shared/helpers';

const formData: RegisterAccountDto = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  role: Roles.TEACHER,
  confirmPassword: '',
};

const formValidations: FormValidations<RegisterAccountDto> = {
  firstName: [
    (value: string) => value.trim().length >= 2,
    'El nombre es obligatorio',
  ],
  lastName: [
    (value: string) => value.trim().length >= 2,
    'El apellido es obligatio',
  ],
  email: [
    (value: string) => regularExp.email.test(value),
    'Debe ser un correo válido',
  ],
  password: [
    (value: string) => isPasswordValid(value),
    `
    Mínimo 8 caracteres de longitud.
    Debe tener al menos una mayúscula.
    Debe tener al menos 1 número.`,
  ],
  confirmPassword: [(value: string) => value.trim().length > 2, ''],
  role: [(value: string) => value !== '', 'Selecciona un rol'],
};

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
    confirmPasswordValid,
    role,
    roleValid,
    isFormValid,
    formState,
    onInputChange,
    onResetForm,
  } = useForm(formData, formValidations);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    if (confirmPassword !== password) {
      console.log('La contraseña no coincide');
    }
  }, [confirmPassword]);

  const onRegisterAccount = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <AuthLayout
      pageName='register'
      title="Comienza"
      subtitle="Creando una cuenta"
      text="Crea una cuenta y comienza uniéndote a tus clases."
      textNavigate="¿Ya tienes una cuenta?"
      textLink="Inicia sesión"
      link="/auth/login"
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
              >
                <option selected value=""></option>
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
            <span
              className={`form__span form__span--left ${
                !isFormValid && formSubmitted ? 'u-text-wrong' : null
              }`}
            >
              {passwordValid?.split('.').map((condition) => (
                <>
                  <span>{condition}</span>
                  <br />
                </>
              ))}
            </span>
          </div>
          <div className="form__buttons">
            <button type="submit" className="form-button__submit">
              Registrar Cuenta
            </button>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};
