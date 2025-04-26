import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ClassConnectApp } from './ClassConnect.tsx'
import { Provider } from 'react-redux'
import { store } from './application/state/store.ts'
import './presentation/styles/app.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={ store }>
      <ClassConnectApp />
    </Provider>
  </StrictMode>
)
