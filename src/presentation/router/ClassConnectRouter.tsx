import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AuthRouter } from './AuthRouter'
import { AppRouter } from './AppRouter'
import { useAuth } from '../../application/hooks'
import { AuthStatus } from '../../domain/entities'

export const ClassConnectRouter: React.FC = () => {

  const { status } = useAuth()

  return (
    <BrowserRouter>
      <Routes>
        {
          status === AuthStatus.AUTHENTICATED
          ? (<Route path='classconnect/app/*' element={ <AppRouter /> } /> )
          : (<Route path='classconnect/auth/*' element={ <AuthRouter /> } />)
        }
        <Route path='/*' element={ <Navigate to={'/classconnect/app/home'}/> } />
      </Routes>
    </BrowserRouter>
  )
}
