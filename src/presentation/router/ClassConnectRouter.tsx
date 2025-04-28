import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CalendarPage, HomePage, SettingsPage, StatsPage } from '../classconnect'

export const ClassConnectRouter: React.FC = () => {

  const { status } = useAuth()

  return (
    <Routes>
      <Route path='home' element={<HomePage />} />
      <Route path='calendar' element={<CalendarPage />} />
      <Route path='stats' element={<StatsPage />} />
      <Route path='settings' element={<SettingsPage />} />
      <Route path='/*' element={<Navigate to={'/home'} />} />
    </Routes>
  )
}
