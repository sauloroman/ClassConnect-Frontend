import React, { useState } from 'react';
import { useForm } from '../../../hooks';
import { formData, formValidations } from '../data/send-email-data';
import { useAuth } from '../../../../application/hooks';

export const PasswordFormEmail: React.FC = () => {
  const {
    email,
    emailValid,
    onInputChange,
    isFormValid,
  } = useForm(formData, formValidations);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { sendEmailToRecoverPassword } = useAuth()

  const onSendEmail = ( e: React.FormEvent ) => {
    e.preventDefault()
    setFormSubmitted( true )

    if ( !isFormValid ) return 

    sendEmailToRecoverPassword({ email })
  }

  return (
    <form onSubmit={ onSendEmail } className="form u-w-80 u-mt-4">
      <div className="form__field">
        <input
          name="email"
          value={email}
          onChange={onInputChange}
          placeholder="Tu email asociado a tu cuenta"
          type="email"
          className="form__input"
        />
        <span
          className={`form__span ${
            !isFormValid && formSubmitted ? 'u-text-wrong' : null
          }`}
        >
          {emailValid}
        </span>
      </div>
      <div className="form__buttons u-mt-2">
        <button type='submit' className="btn btn--grad-1 u-w-100">📨 Enviar email</button>
      </div>
    </form>
  );
};
