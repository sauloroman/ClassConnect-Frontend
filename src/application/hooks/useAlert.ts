import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../state/store"
import { AlertType, hideAlert, resetAlert, showAlertError, showAlertInfo, showAlertSuccess } from "../state/alert/alert.slice"

export const useAlert = () => {

  const dispatch = useDispatch<any>()
  const { message, showAlert, type } = useSelector( (state: RootState) => state.alert )

  const openAlert = ( message: string, type: AlertType ) => {

    if ( type === AlertType.ERROR ) {
      return dispatch( showAlertError( message ) )
    }

    if( type === AlertType.INFO ) {
      return dispatch( showAlertInfo( message ) )
    }

    if ( type === AlertType.SUCCESS ) {
      return dispatch( showAlertSuccess( message ) )
    }

  }

  const closeAlert = () => {
    dispatch( hideAlert() )
    setTimeout(() => resetAlert(), 1000)
  }

  return {
    message,
    showAlert,
    type,

    openAlert,
    closeAlert,
  }

}