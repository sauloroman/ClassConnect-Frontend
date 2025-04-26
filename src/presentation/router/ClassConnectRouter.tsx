import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthRouter } from './AuthRouter'

export const ClassConnectRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='classconnect/auth/*' element={ <AuthRouter /> } />
      </Routes>
    </BrowserRouter>
  )
}
