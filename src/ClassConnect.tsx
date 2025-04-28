import React from 'react'
import { Alert } from './presentation/shared/components'
import { AppRouter } from './presentation/router/AppRouter'
import { BrowserRouter } from 'react-router-dom'

export const ClassConnectApp: React.FC = () => {
  return (
    <BrowserRouter>
      <AppRouter />
      <Alert />
    </BrowserRouter>
  )
}
