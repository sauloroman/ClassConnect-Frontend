import React, { useState } from 'react'
import { useForm } from '../../../hooks'
import { useAuth } from '../../../../application/hooks'
import { formData, formValidations } from '../data/form.data'
import { LoadingSpinner } from '../../../shared/components'

export const ValidateAccountForm: React.FC = () => {
  
  const { isLoading, validateAccount, verificationCodeSent: { email }, resendVerificationCode } = useAuth()
  formData.email = email 

  const { 
    code,
    codeValid,
    formState,
    isFormValid,
    onInputChange,
  } = useForm(formData, formValidations )
  const [formSubmitted, setFormSubmitted] = useState(false)

  const onValidateAccount = ( e: React.FormEvent ) => {
    e.preventDefault()
    setFormSubmitted(true)

    if ( !isFormValid ) return;
    validateAccount( formState )
    setFormSubmitted( false )
  }

  const onResendValidationCode = ( e:React.FormEvent ) => {
    e.preventDefault()
    resendVerificationCode( email )
  } 

  return (
    <>
      {
        isLoading
        ? ( <LoadingSpinner />)
        : (
          <form className='form validate-account__form'>
            <div className="form__field u-mb-4">
              <input 
                name='code'
                value={code}
                onChange={ onInputChange }
                placeholder='Ingresa tu código para verificar tu cuenta'
                id='code'
                className='form__input' 
                type="text"
              />
              <span
                className={`form__span ${
                  !isFormValid && formSubmitted ? 'u-text-wrong' : null
                }`}
              >
                {codeValid}
              </span>
            </div>
            <div className="form__buttons">
              <button
                onClick={ onValidateAccount } 
                // disabled={ isLoading || renewCode } 
                type='submit' 
                // className={`form-button__submit ${(isLoading || renewCode) && 'u-disabled'}`}
              >Validar cuenta</button>

              {/* { renewCode && <button onClick={onResendValidationCode} className='form-button__outlined'>Obtener código</button> } */}
            </div>
          </form>
        )
      }
    </>
  )
}
