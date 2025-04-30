import React, { useEffect, useState } from 'react'
import { useForm } from '../../../hooks'
import { useAlert, useAuth } from '../../../../application/hooks'
import { formData, formValidations } from '../data/validate-account-data'
import { LoadingSpinner } from '../../../shared/components'
import { getEnvVariables } from '../../../shared/helpers'

interface ValidateAccountFormProps {
  email: string
}

const { VITE_MESSAGE_TO_RESEND_VERIFICATION_CODE } = getEnvVariables()

export const ValidateAccountForm: React.FC<ValidateAccountFormProps> = ({ email }) => {
  
  const { isLoading, validateAccount, resendVerificationCode } = useAuth()
  const { message } = useAlert()

  formData.email = email ?? ''  

  const { 
    code,
    codeValid,
    formState,
    isFormValid,
    onInputChange,
  } = useForm(formData, formValidations )

  const [formSubmitted, setFormSubmitted] = useState(false)
  const [resendCode, setResendCode] = useState(false)

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
    setResendCode( false )
  } 

  useEffect(() => {
    if ( message === VITE_MESSAGE_TO_RESEND_VERIFICATION_CODE ) {
      return setResendCode( true )
    }
  }, [message])

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
                placeholder='Código'
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
                disabled={ isLoading || resendCode } 
                type='submit' 
                className={`btn btn--grad-3 u-w-100 ${(isLoading || resendCode) && 'u-disabled'}`}
              >Validar cuenta</button>
               {resendCode && <button onClick={ onResendValidationCode } className='btn btn--grad-2 u-w-100'>Obtener código</button>}
            </div>
          </form>
        )
      }
    </>
  )
}
