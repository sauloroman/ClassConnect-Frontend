import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ClassConnectApp } from './ClassConnect.tsx'
import './presentation/styles/app.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClassConnectApp />
  </StrictMode>
)
