import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthRouter } from './AuthRouter'
import { ClassConnectRouter } from './ClassconnectRouter'
import { useAuth } from '../../application/hooks'
import { AuthStatus } from '../../domain/entities'

export const AppRouter: React.FC = () => {
  
  const { status, renewToken } = useAuth()
  
  useEffect(() => {
    renewToken()
  }, [])

  return (
    <Routes>
      {
        status !== AuthStatus.AUTHENTICATED 
        ? (<Route path='auth/*' element={ <AuthRouter /> } />)
        : (<Route path='/*' element={ <ClassConnectRouter /> } />) 
      }
      <Route path='/*' element={<Navigate to={'/auth/login'} />} />
    </Routes>
  )
}
