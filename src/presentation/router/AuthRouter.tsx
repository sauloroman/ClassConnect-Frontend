import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { 
  AuthForgotPassword, 
  AuthLogin, 
  AuthChangePassword, 
  AuthRegister, 
  AuthValidateAccount,
  AuthValidateAccountMessage
} from '../auth'

export const AuthRouter: React.FC = () => {
  return (
    <Routes>
      <Route path='login' element={<AuthLogin />} />
      <Route path='register' element={<AuthRegister />} />
      <Route path='password/forgot-password' element={<AuthForgotPassword />} />
      <Route path='password/change-password/:token' element={<AuthChangePassword />} />
      <Route path='validate-account/message' element={<AuthValidateAccountMessage />} />
      <Route path='validate-account/:token' element={<AuthValidateAccount />} /> 
      <Route path="/*" element={<Navigate to={'/auth/login'} />} />
    </Routes>
  )
}
