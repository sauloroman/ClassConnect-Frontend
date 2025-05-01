import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { 
  CalendarPage, 
  ClassroomPage, 
  HomePage, 
  ProfessorsPage, 
  ResourcesPage, 
  SettingsPage, 
  StatsPage, 
  StudentsPage 
} from '../classconnect'

export const ClassConnectRouter: React.FC = () => {
  return (
    <Routes>
      <Route path='home' element={<HomePage />} />
      <Route path='calendar' element={<CalendarPage />} />
      <Route path='stats' element={<StatsPage />} />
      <Route path='professors' element={<ProfessorsPage />} />
      <Route path='students' element={<StudentsPage />} />
      <Route path='settings' element={<SettingsPage />} />
      <Route path='resources' element={<ResourcesPage />} />
      <Route path='classroom/:id' element={<ClassroomPage />} />
      <Route path='/*' element={<Navigate to={'/home'} />} />
    </Routes>
  )
}
