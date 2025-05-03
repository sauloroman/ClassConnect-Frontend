import React, { useEffect } from 'react'
import { Alert } from './presentation/shared/components'
import { AppRouter } from './presentation/router/AppRouter'
import { BrowserRouter } from 'react-router-dom'
import { useMenu, useModal } from './application/hooks'
import { useGlobalUIAutoClose } from './presentation/hooks'

export const ClassConnectApp: React.FC = () => {

  const { onCloseModal } = useModal()
  const { closeAccordeonMenu } = useMenu()
  
  useGlobalUIAutoClose({
    menuToggleClass: 'classconnect-accordeon__icon', 
    onClickOutsideMenu: closeAccordeonMenu,
    onEscape: onCloseModal
  })

  return (
    <BrowserRouter>
      <AppRouter />
      <Alert />
    </BrowserRouter>
  )
}
