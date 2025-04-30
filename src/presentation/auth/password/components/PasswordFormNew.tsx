import React, { useState } from 'react'
import { InputPassword } from '../../../shared/components'
import { useForm } from '../../../hooks';
import { formData, formValidations } from '../data/change-password-data';
import { useAuth } from '../../../../application/hooks';

interface PasswordFormNewProps {
  email: string;
}

export const PasswordFormNew: React.FC<PasswordFormNewProps> = ({ email }) => {

  formData.userEmail = email
  const {
    formState,
    isFormValid,
    newPassword,
    newPasswordValid,
    onInputChange,
  } = useForm( formData, formValidations )
  const { changePasswordOfAccount } = useAuth()
  const [formSubmitted, setFormSubmitted] = useState(false)

  const onChangePassword = ( e: React.FormEvent ) => {
    e.preventDefault()
    setFormSubmitted( true )

    if ( !isFormValid ) return
    changePasswordOfAccount( formState )
  }

  return (
    <form onSubmit={ onChangePassword } className='form u-mt-4'>
      <div className="form__field">
        <InputPassword 
          name='newPassword'
          placeholder='Ingresa tu nueva contraseña'
          value={newPassword}
          onSetValue={ onInputChange }
        />
        <span
          className={`form__span form__span--left u-mt-1 ${
            !isFormValid && formSubmitted ? 'u-text-wrong' : null
          }`}
        >
          {newPasswordValid?.split('.').map((condition) => (
            <div key={condition}>
              <span>{condition}</span>
              <br />
            </div>
          ))}
        </span>
      </div>
      <div className="form__buttons u-mt-2">
        <button type='submit' className='u-w-100 btn btn--grad-3'>🔏 Cambiar Contraseña</button>
      </div>
    </form>
  )
}
