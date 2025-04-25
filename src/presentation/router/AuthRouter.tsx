import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { 
  AuthForgotPassword, 
  AuthLogin, 
  AuthRecoverPassword, 
  AuthRegister, 
  AuthValidateAccount
} from '../auth'

export const AuthRouter: React.FC = () => {
  return (
    <Routes>
      <Route path='login' element={<AuthLogin />} />
      <Route path='register' element={<AuthRegister />} />
      <Route path='forgot-password' element={<AuthForgotPassword />} />
      <Route path='recover-password' element={<AuthRecoverPassword />} />
      <Route path='validate-account' element={<AuthValidateAccount />} />
      <Route path="/*" element={<Navigate to={'/auth/login'} />} />
    </Routes>
  )
}
