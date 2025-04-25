import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthRouter } from './AuthRouter'

export const ClassConnectRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='auth/*' element={ <AuthRouter /> } />
      </Routes>
    </BrowserRouter>
  )
}
