import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CalendarPage, HomePage } from '../classconnect'

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path='/home' element={<HomePage />} />
      <Route path='/calendar' element={<CalendarPage />} />
      <Route path='/*' element={<Navigate to={'/classconnect/app/home'} />} />
    </Routes>
  )
}
