import React, { useEffect, useMemo } from 'react'
import { AlertType } from '../../../../application/state/alert/alert.slice'
import { useAlert } from '../../../../application/hooks'

export const Alert: React.FC = () => {

  const { message, type, showAlert, closeAlert } = useAlert()

  const iconName = useMemo(() => {
    return type === AlertType.SUCCESS
    ? 'bx bx-check-circle'
    : type === AlertType.ERROR 
    ? 'bx bx-error-alt' 
    : 'bx bx-info-circle'
  }, [ type ])

  const title = useMemo(() => {
    return type === AlertType.SUCCESS
    ? 'Éxito'
    : type === AlertType.ERROR
    ? 'Error'
    : 'Información'
  }, [type])

  const status = useMemo(() => {
    return showAlert ? 'alert--open' : 'alert--close'
  }, [ showAlert ])

  useEffect(() => {
    if ( showAlert ) setTimeout(() => closeAlert(), 3000 )
  }, [showAlert])

  return (
    <div className={`alert ${status} alert--${type}`}>
      <div className="alert__grid">
        <div className="alert__icon-box">
          <i className={`${ iconName } alert__icon alert__icon--${type}`}></i>
        </div>
        <div className="alert__content">
          <p className={`alert__title alert__title--${type}`}>{ title }</p>
          <p className={`alert__message alert__message--${type}`}>{ message }</p>
        </div>
        <div className="alert__close-box">
          <i onClick={ closeAlert } className='alert__close bx bx-x' ></i>
        </div>
      </div>
    </div>
  )
}
