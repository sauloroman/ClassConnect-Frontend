import React from 'react'
import { ClassConnectHeader } from '../'

interface ClassConnectProps {
  children: React.ReactNode
}

export const ClassConnectLayout: React.FC<ClassConnectProps> = ({ children }) => {
  return (
    <div className='classconnect'>
      <ClassConnectHeader />
      {children}
    </div>
  )
}
